import { useState, useEffect,useRef} from "react";
import React from 'react';

const Dropdown = ({options, selected, onSelectedChange, purpose}) =>{
    //pentru a deschide sau inchide dropdown-ul
    const [open, setOpen] = useState(false);

    const ref = useRef();
    //la prima redare a componentei se seteaza une event listener
    useEffect(()=>{
        const onBodyClick = (e)=>{
            if(ref.current && ref.current.contains(e.target)){
                return ; // do nothing if the clicked element is inside our component
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);
        // if the component won't be shown anymore 
        // run some clean-up code
        return(() =>{
            document.body.removeEventListener('click',onBodyClick); // remove the listener
        });
    },[]);
    

    const myoptions = options.map((option)=>{

        if (option === selected) {
            return null;
        }
        else{
            return(
                <div 
                className = "item" 
                key = {option.value}
                onClick = {() => onSelectedChange(option)}> {/*se afiseaza optiunea selectata curent*/}
                    {option.label}
                </div>
            );
        }
    });
    //Setarea visible active si visible transition pentru dropdown , respectiv menu se face daca open === true
    var firstThing = '';
    var secondThing = ''
    if(open === true){
        firstThing = 'visible active';
        secondThing = 'visible transition';
    }
    return(
        <div  ref = {ref} className = "ui form">
            <div className = "field">
                <label className = "label">{purpose}</label>
                <div className = {`ui selection dropdown ${firstThing}`} onClick = { () => setOpen(!open)}> {/*iar in momentul in care se selecteaza o optiunea ea trebuie ascunsa*/}
                    <i className = "dropdown icon"></i>
                    <div className = "text">{selected.label}</div>
                    <div className = {`menu ${secondThing}`}>{myoptions}</div>
                </div>
            </div>
            {/*<div className = "field">
                <h3 style = {{color : selected.value}}> Text</h3>
            </div>*/}
        </div>
    );
};
export default Dropdown;