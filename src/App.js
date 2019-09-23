import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading : true
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 5000) 
  }
  
  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!"}</div>;
  }
}


//component : mounting, updating, unmounting
//mountion - function 1. 2. 3.     /updating function - 1.    /unmountion - function 1.

export default App;
