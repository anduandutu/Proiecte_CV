import React,{useState,useEffect} from 'react' ;

//import user-created components
import SearchBar from './SearchBar';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';
import useVideos from '../hooks/useVideos.js';

const App = () =>{
    //Initializarea state-ului
    const [selectedVideo,setSelectedVideo] = useState(null);
    //use the custom hook to get the list of videos and the method for searching videos
    const [videos,search] = useVideos('stars');
    //every time we get a list of videos, set videos[0]
   
    useEffect(()=>{
        console.log(videos);
        const timerId = setTimeout(()=>{
            setSelectedVideo(videos[0]);
        },500);
        
        return (()=>{
            clearTimeout(timerId);
        });
    },[videos]);

    return(
       <div className = "ui container">
                <SearchBar onSubmit = {search}/>
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetail video = {selectedVideo} />
                        </div>
                        <div className = "five wide column">
                        <VideoList 
                        videos = {videos} 
                        onVideoSelect = {setSelectedVideo}/> {/*videoclipul in cauza este preluat si afisat*/}
                        </div>
                    </div>
                </div>
        </div>
    );
    //SearchBar se apeleaza cu un callBack utilizat astfel ca in momentul apasarii butonului Enter pentru 
    //preluarea info din forma SearchBar, sa se preia elementul "term" si sa se apeleze in mod automat metoda 
    //de cautare a videoclipurilor in cadrul App.js
}
export default App;