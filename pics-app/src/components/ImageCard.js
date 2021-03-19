import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        //wire up the React REF
        this.imageRef = React.createRef();
        this.state = {spans: 0};
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans); // after loading the image 
        //set the span value
        //add an event listener for the load event. Once the loading is finalized, call setSpans
        //which is an arrow function (MUST)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height/10);
        this.setState({spans});

    };
    render(){
        //let it be rendered
        const { desciption, urls } = this.props.image;
        return(
            <div style = {{gridRowEnd : `span ${this.state.spans}`}}>
                {/*JSX tag not a direct DOM Element*/}
                <img alt = {desciption}
                     src = {urls.regular}
                     ref = {this.imageRef}
                ></img>
            </div>
        );
    };
}

export default ImageCard;