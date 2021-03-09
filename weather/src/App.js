import React, { Component } from 'react';
import Weather from './components/Weather'
import Form from './components/Form'
require('dotenv').config();
export default class App extends Component {
  state = {
    zip1: undefined,
    zip2: undefined,
    zip3: undefined,
    zip4: undefined,
    zip5: undefined,
    day: undefined,
    date: undefined,
    //current
    temperature: undefined,
  }
  getWeather = async e => {
    e.preventDefault();
    const zip1 = e.target.elements.zip1.value;
    const zip2 = e.target.elements.zip2.value;
    const zip3 = e.target.elements.zip3.value;
    const zip4 = e.target.elements.zip4.value;
    const zip5 = e.target.elements.zip5.value;
    const weatherLink = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip1}${zip2}${zip3}${zip4}${zip5}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`);
    const list = await weatherLink.json();


  if(zip1){
    this.setState({
      date: list.list[0].dt_txt,
      zip1: zip1,
      //country: country,
      city: list.city.name,
      //  current
      temperature: list.list[0].main.temp,

    });
  }

  }

  render() {
    
    return (
      <div className="w-650 h-477 bg-gray-200">

      <div className="App">
         <Form className='bg-gray-500 shadow-md p-6 ' zip1={this.state.zip1} getWeather={this.getWeather} />
        <Weather  
        zip1={this.state.zip1}
        zip2={this.zip2}
        zip3={this.zip3}
        zip4={this.zip4}
        zip5={this.zip5}
        date={this.state.date}
        city={this.state.city}
        temperature={this.state.temperature}/>
      </div>
        </div>
    );
  }

}
