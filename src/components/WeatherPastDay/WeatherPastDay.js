import React  from 'react'
import dayjs from 'dayjs'
import './WeatherPastDay.css'

const monthArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',]

function WeatherPastDay({forecast}) {
  function getIcon(icon) {
      let src = `../../images/weather/${icon}.png`
      return src
  }

  function formatDate(date) {
      let day = dayjs.unix(date)
      return day.$D + ' ' + monthArray[day.$M] + ' ' + day.$y
  }
        return (
            <div className="WeatherPastDay">
                <p className="WeatherPastDay-date">{formatDate(forecast.timestamp)}</p>
                <div className="WeatherPastDay-wrapper">
                    <img alt="alt" src={getIcon(forecast.icon)} />
                </div>
                <p className="WeatherPastDay-temp"><span>{forecast.temp}</span>°</p>
            </div>
        )
}

export default WeatherPastDay;
