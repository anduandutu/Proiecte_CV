import React from 'react';

import VideoItem from './VideoItem.js';
const VideoList = ({videos,onVideoSelect}) =>{
    const videoclips = videos.map((video) => {
        return (
            <VideoItem key = {video.id.videoId} video = {video} onVideoSelect = {onVideoSelect} />
        );
    });
    return(
        <div className = "ui relaxed divided list" >
            {videoclips}
        </div>
    );
};
export default VideoList;