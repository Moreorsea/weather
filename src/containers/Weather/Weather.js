import React, { Component } from 'react';
import WeatherBlock from '../../components/WeatherBlock/WatherBlock';
import WeatherPast from '../../components/WeatherPast/WeatherPast';
import './Weather.css'

const options = [
    { text: 'Санкт-Петербург', value: 1, lat: 59.57, lon: 30.19 },
    { text: 'Самара', value: 2, lat: 53.195873, lon: 50.100193 },
    { text: 'Тольятти', value: 3, lat: 53.507836, lon: 49.420393 },
    { text: 'Саратов', value: 4, lat: 51.533557, lon: 46.034257 },
    { text: 'Казань', value: 5, lat: 55.796127, lon: 49.106405 },
    { text: 'Краснодар', value: 6, lat: 45.035470, lon: 38.975313 },
]

export default class Weather extends Component {
    render() {
        return (
            <div className="Weather">
                <h1>
                    <span>Weather</span>
                    <span>forecast</span>
                </h1>

                <div className="WeatherWrapper">
                    <WeatherBlock options={options}></WeatherBlock>
                    <WeatherPast options={options}></WeatherPast>
                </div>
            </div>
        )
    }
}
