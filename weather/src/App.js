import './App.css';
import React, { Component } from 'react';
import Weather from './components/Weather'
import Form from './components/Form'
export default class App extends Component {
  constructor() {
    this.state ={
      zip:""
    }
  }
  getWeather = async e => {
    e.preventDefault();
    const zip-1 = e.target.elements.zip1.value;
    const zip-2 = e.target.elements.zip2.value;
    const zip-3 = e.target.elements.zip3.value;
    const zip-4 = e.target.elements.zip4.value;
    const zip-5 = e.target.elements.zip5.value;
    const zip = e.target.elements.zip.value;
  }
  if(zip){
    this.setState({zip:zip})
  }
  render() {
    
    return (
      <div className="App">
        <Form  getWeather={this.getWeather}/>
        <Weather zip= {this.state.zip} />
      </div>
    );
  }

}

