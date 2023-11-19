import react, { Dispatch, SetStateAction } from 'react';

interface SettingsType{
    isSettings:boolean,
    SetisSettings:Dispatch<SetStateAction<boolean>>,
    WorkTime:number,
    PauseTime:number,
    setWorkTime:Dispatch<SetStateAction<number>>,
    setPauseTime:Dispatch<SetStateAction<number>>,
    isStop:boolean,
    SetisStop:Dispatch<SetStateAction<boolean>>
}

const SettingsContext = react.createContext<SettingsType>({
    isSettings:false,
    SetisSettings:() =>{},
    WorkTime:0,
    PauseTime:0,
    setWorkTime:() =>{},
    setPauseTime:() =>{},
    isStop:false,
    SetisStop:()=>{}
});
export default SettingsContext;