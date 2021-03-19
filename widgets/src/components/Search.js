import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search = () =>{
    const [term,setTerm] = useState('');
    const [debouncedTerm,setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedTerm(term);
        },1000);

        return ()=>{
            clearTimeout(timerId);
        };
    },[term]);

    useEffect(()=>{
        const search = async() =>{
            //get the data obtained from the GET request
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params :{
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : debouncedTerm,
                },
            });
            setResults(data.query.search);
        };
        if(debouncedTerm){
            search();
        }

    },[debouncedTerm]);

    const listResults = results.map((result)=>{
        return(
            <div className = "item" key={result.pageid}>
                <div className = "right floated content">
                    <a className = "ui button" href = {`https://en.wikipedia.org?curid=${result.pageid}`}>Go to article</a>
                </div>
                <div className = "content">
                    <div className = "header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML = {{__html : result.snippet}}></span> {/*be careful that the third party source should be secure*/}
                </div>
            </div>
        );
    });
    return(
        <div className = "ui form">
            <div className = "field">
                <label>Type search term :</label>
                <input 
                    className = "input" 
                    value = {term} 
                    onChange = {(e)=>{setTerm(e.target.value)}}
                ></input>
            </div>
            <div className = "ui celled list">
                {listResults}
            </div>
        </div>
    );
};
export default Search;