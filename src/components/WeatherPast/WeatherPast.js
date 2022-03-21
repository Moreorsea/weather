import React, { useState, useEffect } from 'react'
import './WeatherPast.css'
import Plug from '../Plug/Plug'
import SelectCity from '../SelectCity/SelectCity'
import SelectDate from '../SelectDate/SelectDate'
import WeatherPastDay from '../WeatherPastDay/WeatherPastDay'
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomSelectDate from '../CustomSelect/CustomSelectDate';
import axios from 'axios'

function WeatherPast(props) {
  const [currentCoords, setCurrentCoods] = useState({
      lat: 0,
      lon: 0
  })
  const [currentDate, setCurrentDate] = useState('')
  const [forecast, setForecast] = useState([])

  function changeCoords(e) {
    let coords = e.target.value.split(',')
    let [lat, lon] = coords

    setCurrentCoods({'lat': lat, 'lon': lon})
  }

  function changeDate(e) {
    console.log(e.target)
    let date = e.target.value

    setCurrentDate(date)
    console.log(currentDate)
  }

  function getForecast(lat, lon, dt) {
    axios({
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&units=metric&dt=${dt}&appid=4240fd4cc25878e4fa3cc9755ebb1139`,
    }).then(res => {
      let el = {}
      let item = res.data.hourly[12]

      el['timestamp'] = item.dt;
      el['icon'] = item.weather[0].icon
      el['temp'] = Math.round(item.temp)

      setForecast(el)
    })
  }

  useEffect(() => {
    if(currentCoords.lat === 0 || currentDate === '') return;

    getForecast(currentCoords.lat, currentCoords.lon, currentDate)
  }, [currentCoords, currentDate])

    function getPastDate() {
        let pastDate = []
        for (let i = 1; i < 6; i++) {
          let curTiemstamp = Math.floor(Date.now() / 1000)

          let date = Math.floor(curTiemstamp - (86400 * i))
          pastDate.push(date)
        }
        return pastDate
    }

    return (
            <div className="WeatherPast">
                <h2>Прогноз погоды на дату в прошлом</h2>
                <div className="WeatherBlock-wrapper">
                    <SelectCity
                        options={props.options}
                        currentCoords={currentCoords}
                        changeCoords={changeCoords}
                    ></SelectCity>
                    <SelectDate
                        options={getPastDate()}
                        changeDate={changeDate}
                      ></SelectDate>
                </div>

                {forecast.length === 0 ? <Plug></Plug> : <WeatherPastDay forecast={forecast} />}

            </div>
        )
}

export default WeatherPast;
