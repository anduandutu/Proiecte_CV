import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
class App extends React.Component{
    constructor(props){
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this); // solved setState is not a function
    }

    state = { images : []};
    async onSearchSubmit(term){
        const  response = await unsplash
        .get('/search/photos',
        {
            //search term
            params : {
                query: term
            }

        });
        // cuz the this property cannot be accessed we have a setState not a function error
        // which is solved by binding in the constructor the method
        this.setState({images : response.data.results}); // rerender the component
    }

    render(){
        return (
            <div className = "ui container" style = {{marginTop:'10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                Found : {this.state.images.length}
                <ImageList renderedImages = {this.state.images}/>
            </div>
        );
    }
};

export default App;