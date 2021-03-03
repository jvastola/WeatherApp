import './App.css';
import React, { Component } from 'react';
import Weather from './components/Weather'
import Form from './components/Form'
export default class App extends Component {
  state = {
    zip1: undefined,
    zip2: undefined,
    zip3: undefined,
    zip4: undefined,
    zip5: undefined,
  }
  getWeather = async e => {
    e.preventDefault();
    const zip1 = e.target.elements.zip1.value;
    const zip2 = e.target.elements.zip2.value;
    const zip3 = e.target.elements.zip3.value;
    const zip4 = e.target.elements.zip4.value;
    const zip5 = e.target.elements.zip5.value;
    const weatherLink = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip1}${zip2}${zip3}${zip4}${zip5}&appid=${58469e26060daafd5b059e22faf15f64}&units=imperial`);
  }

  if(zip1){

  }
  render() {
    
    return (
      <div className="App">
         <Form zip1={this.state.zip1} getWeather={this.getWeather} />
        <Weather  
        zip1={this.state.zip1}
        zip2={this.zip2}
        zip3={this.zip3}
        zip4={this.zip4}
        zip5={this.zip5}/>
      </div>
    );
  }

}
