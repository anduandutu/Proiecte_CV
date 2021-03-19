import React,{useState,useEffect} from 'react';
import axios from 'axios';
const APIKEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
const Convert = ({language, textToTranslate}) =>{

    const [debouncedText, setDebouncedText] = useState(textToTranslate); //to keep track of text modif.
    const [translatedText, setTranslatedText] = useState(''); //to use to show translated text/ output

   useEffect(()=>{
        //to ensure no altering of the text will appear
        const timerId = setTimeout(()=>{
            setDebouncedText(textToTranslate);
        },1000);
        //clear the timer 
        return(()=>{
            clearTimeout(timerId);
        });

    },[textToTranslate]);

    useEffect(()=>{
        
        //make the request to the google translate API
        //console.log('New language or text');
        const convert = async() =>{
            //we use a POST request
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params :{
                    q : debouncedText,
                    target : language.value,
                    key : APIKEY,
                },
            });
            //set the translated text to be the result of this post request
            setTranslatedText(data.data.translations[0].translatedText);
        };
        //if there is any text the convert function will be called
        if(debouncedText){
            convert();
        }

    },[language,debouncedText]);

    return(
        
        <div className = "field">
            {/* display the translated text*/}
            <h3>Output : {translatedText}</h3>
        </div>
    );
};

export default Convert;