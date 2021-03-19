import React,{useState} from 'react';
import Dropdown from './Dropdown.js';
import Convert from './Convert.js';

const languageOptions = [
    {
        label : 'Afrikaans',
        value : 'af'
    },
    {
        label : 'Arabic',
        value : 'ar'
    },
    {
        label : 'Hindi',
        value : 'hi'
    }
];

const Translate = () =>{
    const [selectedLanguage, setLanguage] = useState(languageOptions[0]);
    const [text , setText] = useState('');
    //console.log(text);
    return (
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label className = "label">Enter text to translate : </label>
                    <input value={text} onChange = {(e) => {setText(e.target.value)}}></input>
                </div>
            </div>
            <div className = "field">
                <Dropdown options = {languageOptions} selected = {selectedLanguage} onSelectedChange = {setLanguage} purpose = 'Into the language (Select from below) :'/>
            </div>
            <div className = "field">
                <Convert language = {selectedLanguage} textToTranslate = {text} />
            </div>
        </div>
    );
};
export default Translate;