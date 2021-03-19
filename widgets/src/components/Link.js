import React from 'react';
const Link = ({className,href,children}) =>{
    const onClick = (event) =>{
        //if a user holds down cmd and clicks on the link, it should appear in a new tab

        if(event.metaKey || event.ctrlKey){
            return;
        }


        event.preventDefault(); // prevent reloading of the page
        window.history.pushState({},'',href); // changing the URL
        //generating the navigation event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a 
        className = {className} 
        href = {href}
        onClick = {(e) =>onClick(e)}
        >{children}</a>
    );
}
export default Link;