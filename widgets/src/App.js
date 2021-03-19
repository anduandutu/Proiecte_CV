import React, {useState} from 'react';

import Accordion from './components/Accordion.js';
import Search from './components/Search.js';
import Dropdown from './components/Dropdown.js';
import Translate from './components/Translate.js';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
//create a static array
const qaArray = [
    {
        title : 'What is React?',
        answer : 'React is a front end JS framework.'
    },
    {
        title : 'What is React Router?',
        answer : 'A third party library used for navigation.'
    },
    {
        title : 'What is the difference between functional components and class-based ones?',
        answer : 'While class-based components have acces to lyfecicle methods and state by default through Inheritance from React.Component , the functional components use the hooks system to gain additional functionality except the one that it is designed for.'
    }
];
const options = [
    {
        label : 'Red',
        value : 'red'
    },
    {
        label : 'Green',
        value : 'green'
    },
    {
        label : 'Blue',
        value : 'blue'
    }
];

const App = () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setDropdownVisible] = useState(true);
    return(
        <div>
            <Header/>
            <Navigation path = "/">
                <Accordion items = {qaArray}/>
            </Navigation>
            <Navigation path = "/list">
                 <Search />
            </Navigation>
            <Navigation path = "/dropdown">
                <button onClick = {() => {setDropdownVisible(!showDropdown)}}>Toggle dropdown</button>
                {/* this syntax practically means if showDropdown is true then show everything, else render nothing*/}
                {showDropdown ? (
                <div>
                    <Dropdown options = {options} selected = {selected} onSelectedChange = {setSelected} purpose = 'Select a color....'/>
                </div>
                ) : null };
            </Navigation>
            <Navigation path = "/translate">
                <Translate />
            </Navigation>        
        </div>
    );
};
export default App ;