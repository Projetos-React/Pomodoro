import { AiOutlineSetting } from 'react-icons/ai'
import { useContext } from 'react'
import SettingsContext from './SettingsContext'

export default function ConfigButton() {
    const SettingsInfo = useContext(SettingsContext);
    return (
        <button style={{ padding: 0, fontSize: '80px', border: 'none', 
        backgroundColor: 'transparent',outline:'none' }}
        onClick={() => {
            SettingsInfo.SetisSettings(true)
            SettingsInfo.SetisStop(true);
        }}>
            <AiOutlineSetting color='white' />
        </button>
    )
}