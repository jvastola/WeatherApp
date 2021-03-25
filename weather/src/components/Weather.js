import { React, Component } from 'react'
import Moment from "react-moment";
import Card from "./Card"

class Weather extends Component {
  render() {
    const date = new Date();
    return (
<div className="pl-8 w-full mt-16 lg:mt-64 lg:px-40 justify-center container mx-auto">
        {this.props.zip1 && (

          <div className="">
            <h2 className="font-bold text-3xl leading none pb-1">
              <Moment format="MMMM do[, ] YYYY">{date}</Moment>
            </h2>
            
            <h2> {this.props.city}</h2>
            
            <h1> {this.props.temperature}&#176;</h1>
          </div>
        )}
      </div>
    )
  }
}
export default Weather