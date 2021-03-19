import React, {useState} from 'react';
const SearchBar = ({onSubmit}) =>{
    const [term, setTerm] = useState('');

    const onInputChange = (ev) =>{
        setTerm(ev.target.value);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term);
    };

    return(
            <div className = "search-bar ui segment">
                <form  onSubmit = {(e) => onFormSubmit(e)} className = "ui form">
                    <div className = "field">
                        <label>Video Search...</label>
                        <input  type="text" 
                                value = {term} 
                                onChange = {(e) => {onInputChange(e)}}></input>
                    </div>
                </form>
            </div>
    );
}
export default SearchBar;