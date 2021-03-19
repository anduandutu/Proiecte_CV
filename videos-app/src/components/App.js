import React from 'react' ;

//import user-created components
import SearchBar from './SearchBar';
import youtube from '../api/youtube.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';
class App extends React.Component{
    state = {
        videos : [],
        selectedVideo : null
    }; // initializarea obiectului ce reprezinta state-ul App.js
    constructor(props){
        super(props); //pentru a prelua proprietatile mostenite
        //pentru ca in onSearchSubmit folosim setState avem nevoie sa legam state-ul de functia in cauza 
        this.onSearchSubmit = this.onSearchSubmit.bind(this);

    };

    componentDidMount(){
        this.onSearchSubmit('stars');
    }

    //cautarea de date folosind API este o rutina care se face in mod asincron cu incarcarea paginii 
    //si prin urmare este marcata prin cuvantul async  
    async onSearchSubmit(term){
        //console.log(term);
        //PAS 1  : preluarea videoclipurilor gasite in urma request-ului intr-un vector
        const  response = await youtube
        .get('/search',
        {
            //search term -- se precizeaza termenul dupa care se face cautarea
            params : {
                q: term
            }

        });
        //PAS 2 : actualizarea state-ului cu videoclipurile gasite
        //console.log(response);
        this.setState({
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        });
    };

    onVideoSelect = (video) =>{
        console.log('From the app',video); // videoclipul in cauza este pus ca fiind cel selectat
        this.setState({selectedVideo : video});
    }
    render(){
        return(
            <div className = "ui container">
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo} />
                        </div>
                        <div className = "five wide column">
                        <VideoList 
                        videos = {this.state.videos} 
                        onVideoSelect = {this.onVideoSelect}/> {/*videoclipul in cauza este preluat si afisat*/}
                        </div>
                    </div>
                </div>
            </div>
        );
        //SearchBar se apeleaza cu un callBack utilizat astfel ca in momentul apasarii butonului Enter pentru 
        //preluarea info din forma SearchBar, sa se preia elementul "term" si sa se apeleze in mod automat metoda 
        //de cautare a videoclipurilor in cadrul App.js
    }
}
export default App;