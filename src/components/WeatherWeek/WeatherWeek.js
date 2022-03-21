import React, {useState, useEffect} from 'react'
import './WeatherWeek.css'
import Loader from '../Loader/Loader'
import DayList from '../DayList/DayList'


export default function WeatherWeek(props) {
    const [index, setIndex] = useState(0)
    const [transform, setTransform] = useState(`translateX(0)`)
    const cardWith = 214

    useEffect(() => {
      setTransform(`translateX(-${cardWith * index}px)`)
    }, [index])

    function toggleSlide(num) {
      setIndex(prev => prev + num)
    }

    return (
        <div className="WeatherWeek">
            {
              index !== 0 && <span className="WeatherWeek-arrow WeatherWeek-left-arrow" onClick={() => {toggleSlide(-1)}}></span>
            }

            <DayList transform={transform} forecast={props.forecast}></DayList>

            {
              index !== 7 && <span className="WeatherWeek-arrow WeatherWeek-right-arrow" onClick={() => {toggleSlide(1)}}></span>
            }
        </div>
    )
}
