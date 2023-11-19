import { useContext} from "react"
import {AiOutlineClose} from 'react-icons/ai'

import './Settings.css'
import SettingsContext from "./SettingsContext";

export default function Settings() {
    const SettingsInfo = useContext(SettingsContext);

    return (
        <div className="settings-container">
            <div style={{display:'flex',
            flexDirection:'row', width:'100%',justifyContent:'space-between'}}>
                <h2>Settings</h2>
                <button onClick={() => SettingsInfo.SetisSettings(false)} 
                style={{ padding: 0, fontSize: '20px', border: 'none', 
                backgroundColor: 'transparent',color:'blanchedalmond' ,margin:'0',outline:'none' }}>
                    <AiOutlineClose  />
                    </button>
            </div>
            <div>
                <label>Work time</label>
                <input type="number" defaultValue={SettingsInfo.WorkTime}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => SettingsInfo.setWorkTime(Number(e.target.value))} />
            </div>
            <div>
                <label>Pause time</label>
                <input type="number" defaultValue={SettingsInfo.PauseTime}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => SettingsInfo.setPauseTime(Number(e.target.value))} />
            </div>
            <button style={{outline:'none'}} onClick={() => SettingsInfo.SetisSettings(false)}>Save</button>
        </div>
    )
} 