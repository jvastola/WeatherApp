import { React, Component } from 'react'
import Moment from "react-moment";
import Card from "./Card"

class Weather extends Component {
  render() {
    const date = new Date();
    return (
      <div>
        {this.props.zip1 && (

          <div>
            <p>
              <Moment format="MMMM do[, ] YYYY">{date}</Moment>
            </p>
            <h2> {this.props.city}</h2>
            <h1> {this.props.temperature}&#176;</h1>
          </div>
        )}
      </div>
    )
  }
}
export default Weather