import './App.css';
import React, { Component } from 'react';
import Weather from './components/Weather'
import Form from './components/Form'
export default class App extends Component {
  constructor() {
    super()
    this.state ={
      zip:""
    }
  }
  getWeather = async e => {
    e.preventDefault();
    const zip1 = e.target.elements.zip1.value;
    const zip2 = e.target.elements.zip2.value;
    const zip3 = e.target.elements.zip3.value;
    const zip4 = e.target.elements.zip4.value;
    const zip5 = e.target.elements.zip5.value;
  }
  if(zip){
    this.setState({zip:zip})
  }
  render() {
    
    return (
      <div className="App">
        <Weather  />
      </div>
    );
  }

}

