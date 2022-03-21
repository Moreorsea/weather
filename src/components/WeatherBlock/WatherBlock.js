import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import Plug from '../Plug/Plug'
import SelectCity from '../SelectCity/SelectCity'
import WeatherWeek from '../WeatherWeek/WeatherWeek'
import axios from 'axios'
import './WeatherBlock.css'
import CustomSelect from  '../CustomSelect/CustomSelect';

const monthArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',]

export default function WeatherBlock(props) {
    const [forecast, setForecast] = useState([])
    const [currentCoords, setCurrentCoods] = useState({
        lat: 0,
        lon: 0
    })

    useEffect(() => {
      if(currentCoords.lat === 0) return;
      axios({
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/onecall?lat=${currentCoords.lat}&lon=${currentCoords.lon}&units=metric&appid=4240fd4cc25878e4fa3cc9755ebb1139`,
      }).then(res => {
        let forecastArray = []
        res.data.daily.map(item => {
          let el = {}
          let date = dayjs.unix(item.dt)
          let formatDate = date.$D + ' ' + monthArray[date.$M] + ' ' + date.$y

          el['timestamp'] = formatDate;
          el['icon'] = item.weather[0].icon
          el['temp'] = item.temp.day

          forecastArray.push(el)
        })

        setForecast(forecastArray)
      })
    }, [currentCoords])

    function changeCoords(e) {
      let coords = e.target.value.split(',')
      let [lat, lon] = coords

      setCurrentCoods({'lat': lat, 'lon': lon})
      console.log('changeCoords weather block')
    }


    return (
        <div className="WeatherBlock">
            <h2>Прогноз погоды на 7 дней</h2>
            <div className="WeatherBlock-wrapper">
                <SelectCity
                    options={props.options}
                    currentCoords={currentCoords}
                    changeCoords={changeCoords}
                ></SelectCity>
            </div>

            {forecast.length === 0 ? <Plug></Plug> : <WeatherWeek forecast={forecast} />}

        </div>
    )
}
