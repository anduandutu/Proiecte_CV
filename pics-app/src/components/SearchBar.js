import React from 'react';

class SearchBar extends React.Component{

    state = { term : ''};
    onFormSubmit = (event) =>{
        event.preventDefault(); //prevent the form to submit itself automatically - design some custom logic
        //console.log(this.state.term); //this will not generate an error for undefined this because this has been
        //made as an arrow function
        this.props.onSubmit(this.state.term); // it actuaally runs the handler defined in App.js which
        //was passed down to this child as a prop
    }

    render(){
        return (
            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form"> 
                    <div className = "field">
                        <label>Image Search:</label>
                        {/*first is classic syntax for event handling*/ /*second is an alternate way of handling events*/}
                        <input 
                            type="text" 
                            onChange = {(e) => {this.setState({term : e.target.value})}} 
                            onClick = {(event) => {console.log('Input was clicked')}} 
                            value = {this.state.term} 
                        />
                    </div>
                </form>
            </div>
        );
    }
};
export default SearchBar;