import React, {useState} from 'react';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }

]

const Translate = () => {
    const [Language, setLanguage] = useState(options[0]);
    const [text, setTxt] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setTxt(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
            label="Select A Language"
            options={options}
            selected={Language}
            onSelectedLang={setLanguage}
            />
        </div>
    )
}

export default Translate;