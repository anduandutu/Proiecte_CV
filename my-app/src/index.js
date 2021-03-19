//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
//import statements
//Create a React Component
const App = () => {
    const buttonText = 'Click me!';
    const buttonStyle = {'backgroundColor':'blue','color':'white'};
    const labelText = 'Enter me...';
    return(
        <div>
            <label id="name" className = "label" htmlFor = "name">{labelText}</label>
            <input type ="text" id="name"></input>
            <button style ={buttonStyle} >{buttonText}</button> 
        </div>
    );//referencing a JS variable is done by using curly braces. Same is for integretaing the style object inside the style property.
    //inside the curly braces you can also reference a function call too
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
)