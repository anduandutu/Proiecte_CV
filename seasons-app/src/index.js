import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component{
  constructor(props) {
    super(props);
    //initialize state object 
    //se initializeaza proprietatea de latitudine cu null ce urmeaza
    //a fi updated in render()

    //THiS IS THE ONLY TIME I CAN DO DIRECT ASSIGNMENTS
    this.state = {
      lat : null,
      errorMessage : ""
    };
  }
  //state = {lat:null,errorMessage:""}; //equivalent to initializing the state inside a constructor
  componentDidMount(){
    //we moved it from the constructor into the component did mount because we want to 
    //use componentDidMount for doing operations such as data loading and so on
    window.navigator.geolocation.getCurrentPosition(
      (position) => 
        this.setState({lat : position.coords.latitude}),
      (err) => 
        this.setState({errorMessage: err.message})
    );
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return(
        <div>
          Error : {this.state.errorMessage}
        </div>
      );
    }
    else if (!this.state.errorMessage && this.state.lat){
      return(
        <div>
          <SeasonDisplay latitude = {this.state.lat}/>
        </div>
      );
    }
    else{
      return(
          <Spinner message = "Please accept the location request..."/>
      );
    }
  }
  render(){
    return(
      <div className = "border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'));