import {useEffect , useState} from 'react';
const Navigation = ({path, children}) =>{

    const [currentPath, setCurrentPath] = useState(window.location.pathname); //keep track of the path and get our route to update

    useEffect(() => {

        const onLocationChange = () =>{
            //every time the navEvent has been dispatched, we should change the current path
            setCurrentPath(window.location.pathname);
        }
        //add the event listener
        window.addEventListener('popstate', onLocationChange);

        return (()=>{
            //clear the event listener
            window.removeEventListener('popstate',onLocationChange);
        });
    },[]);

    return currentPath === path ? children : null;
};
export default Navigation;