import {React, Component} from 'react'
import Card from "./Card"
require('dotenv').config();

class Weather extends Component{
    constructor(props){
        super()
        this.state = {
          fullData: [],
          dailyData: []
        }
    }
    componentDidMount(){
      const zip = "11102"
      const weatherLink = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      fetch(weatherLink)
        .then(res=>res.json())
        .then(data => console.log("Data List Loaded", data.list))
    }
    formatCards = () => {
      return this.state.dailyData.map((reading, index) => <Card reading={reading} key={index} />)
    }
    render() {
        return(
            <div>
                {this.formatCards()}
            </div>
        )
    }
}
export default Weather