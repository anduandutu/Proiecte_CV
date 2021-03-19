import axios from 'axios';
const KEY = "AIzaSyCN7zGrsZMuUu0yEOGLc8BckFoSuxCcmB0"; //constanta

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part : 'snippet',
        maxResults : 5,
        type : 'video',
        key : KEY
    }
});