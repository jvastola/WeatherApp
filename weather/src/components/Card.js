import React from 'react';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  return (
    <div>
      <div >
        <h3 >{moment(newDate).format('dddd')}</h3>
        <p >{moment(newDate).format('MMMM Do, h:mm a')}</p>

        <h2>{Math.round(reading.main.temp)} °F</h2>
        <div>
          <p>{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;