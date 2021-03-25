import React, { Component } from 'react';
import Weather from './components/Weather'
import Form from './components/Form'
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center bottom;
  background-image: url("https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2251&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;
const MainContent = styled.div`
  width: 650px;
  height: 477px;
  background-color: rgba(250, 250, 250, 0.78);
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: auto;
  display: block;
  transform: translateY(-50px);
`;
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
      <AppWrapper>

      <MainContent>
         <Form zip1={this.state.zip1} getWeather={this.getWeather} />
        <Weather  
        zip1={this.state.zip1}
        zip2={this.zip2}
        zip3={this.zip3}
        zip4={this.zip4}
        zip5={this.zip5}
        date={this.state.date}
        city={this.state.city}
        temperature={this.state.temperature}/>
   
</MainContent>
</AppWrapper>
    );
  }

}
