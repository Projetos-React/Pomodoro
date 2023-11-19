import { AiOutlinePauseCircle } from 'react-icons/ai';
import {useContext} from 'react'; 
import SettingsContext from './SettingsContext';


export default function PlayButton() {
    const SettingsInfo = useContext(SettingsContext);
    return (
        <button onClick={() => SettingsInfo.SetisStop(true)} style={{ padding: 0, fontSize: '80px', border: 'none', 
        backgroundColor: 'transparent',outline:'none' }}>
            <AiOutlinePauseCircle color='white'/>
        </button>
    )
}