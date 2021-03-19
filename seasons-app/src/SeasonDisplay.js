import './SeasonDisplay.css'
import React from 'react';
//configuration object
const SeasonDisplay = (props) =>{
    var month = new Date().getMonth();
    const mySeason = getSeason(props.latitude,month);
    //destructuring
    const {seasonMessage,iconName} = seasonConfig[mySeason];
    //{`${icon}`} -- takes the value of icon and returns it inside the object
    return(
        <div className = {`season-display ${mySeason}`}>
            <i className = {`icon-left massive ${iconName} icon`}/> 
            <h1>Season Display: {seasonMessage}</h1>
            <i className = {`icon-right massive ${iconName} icon`}/>
        </div>
    );
}

const seasonConfig = {
    Summer:{
        seasonMessage : "Let's hit the beach!",
        iconName : 'sun'
    },
    Winter:{
        seasonMessage : "Burr, it's chilly!",
        iconName : 'snowflake'
    }
    //pay attention as the keys have to have the same values as the mySeason value (Summer/Winter)
}

const getSeason = (currentLat, currentMonth) =>{
    var season = (currentLat > 0) ? ((currentMonth>=3 && currentMonth <=8) ? "Summer" : "Winter") : ((currentMonth>=3 && currentMonth <=8) ? "Winter" : "Summer");
    return season;
}

export default SeasonDisplay;