import React from 'react';

import './VideoItem.css';
const VideoItem = ({video, onVideoSelect}) =>{
    return(
        <div className = "video-item item">
            <img className="ui image" src = {video.snippet.thumbnails.medium.url} alt = {video.snippet.title}></img>
            <div className="content" onClick={() => onVideoSelect(video)}> {/*in momentul acesta la click se invoca metoda onVideoSelect cu videoclipul in cauza*/}
                <a className="header">{video.snippet.title}</a>
            </div>
        </div>
    );
}
export default VideoItem;