import { useContext, useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import ConfigButton from './ConfigButton';
import SettingsContext from './SettingsContext';

export default function Timer() {
    const SettingsInfo = useContext(SettingsContext);
    const [second, Setsecond] = useState(0);
    const [minutes, Setminutes] = useState(SettingsInfo.WorkTime)
    const [mode, Setmode] = useState('work');

    let currentValue = SettingsInfo.WorkTime;

    useEffect(() => {
        const timer = setInterval(() => {
            if (!SettingsInfo.isStop) {
                if (second === 0 && minutes !== 0) {
                    Setminutes(minutes - 1);
                    Setsecond(59);
                } else if (second === 0 && minutes === 0) {
                    const newMode = (mode === 'work' ? 'pause' : 'work');
                    Setmode(newMode)
                    if (newMode === 'work') {
                        Setminutes(SettingsInfo.WorkTime);
                        currentValue = SettingsInfo.WorkTime;
                    }if(newMode === 'pause'){
                        Setminutes(SettingsInfo.PauseTime);
                        currentValue = SettingsInfo.PauseTime;
                    }
                    SettingsInfo.SetisStop(true);
                }
                else {
                    Setsecond(second - 1);
                }
            }
        }, 1000)
        return () => clearInterval(timer);
    }, [SettingsInfo.isStop, second])

    const total = (mode === 'work' ? SettingsInfo.WorkTime : SettingsInfo.PauseTime)*60;
    const progress = (((minutes*60)+second)*100/total);
    return (
        <div>
            <CircularProgressbar value={progress}
                text={`${minutes < 10 ? '0' + minutes : minutes} : ${second < 10 ? '0' + second : second}`} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {SettingsInfo.isStop ? <PlayButton /> : <PauseButton />}
                <ConfigButton />
            </div>
        </div>
    )
} 