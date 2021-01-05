import {React, Component} from 'react'
import Moment from "moment"
require('dotenv').config()
class Weather extends Component{
    constructor(props){
        super()
    }
  fetchWeather = async e => {
    const zip = e.target.elements.zip.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${process.env.API_KEY}&units=imperial`
    );

    const data = await api_call.json();
    console.log(data)
  }
    render() {
        const date = new Date()
        return(
            <div>
                <p>{[date]}
                </p>
                Weather 
            </div>
        )
    }
}
export default Weather