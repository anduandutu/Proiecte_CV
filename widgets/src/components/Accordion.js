import React,{useState} from 'react';

const Accordion = ({items}) =>{

    const [activeIndex , setActiveIndex] = useState(null); //initializarea


    const onTitleClicked = (index)=>{
        setActiveIndex(index); //actualizare

    };

    const renderedItems = items.map((item, index) =>{
        const active = (index === activeIndex) ? 'active' : ''; //check if the current index is the selected one
        return(
            <React.Fragment key={item.title}>
                <div 
                    className = {`title ${active}`} 
                    onClick = {()=>{onTitleClicked(index)}}
                > {/*use string interpolation in order to conditionally expand selected element*/}
                    <i className = "dropdown icon"></i>
                    {item.title}
                </div>
                <div className = {`content ${active}`}>
                    <p>{item.answer}</p>
                </div>
            </React.Fragment>
        );
    });
    return(
        <div className = "ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;