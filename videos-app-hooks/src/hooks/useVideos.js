import {useState,useEffect} from 'react';
import youtube from '../api/youtube.js';
const useVideos = (defaultSearchTerm) => {
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm]);
    //cautarea de date folosind API este o rutina care se face in mod asincron cu incarcarea paginii 
    //si prin urmare este marcata prin cuvantul async  
    const search = async term =>{
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
        setVideos(response.data.items);
    };

    return [videos,search]; //return the outputs -- React convention
};

export default useVideos;