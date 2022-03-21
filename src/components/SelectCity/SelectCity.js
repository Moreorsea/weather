import React from 'react'
import './SelectCity.css'


function renderCityList(props) {
    let items = props.options

    return (
        <select className="SelectCity-list" onChange={props.changeCoords}>
            <option value="All" selected disabled hidden>Select city</option>
            {items.map((item) => {
              let value = []
              value.push(item.lat)
              value.push(item.lon)
              return (
                < option
                    className="SelectCity-item"
                    key={item.value}
                    value={value}
                > {item.text}</option>
              )
            })
            }
        </select >
    )
}


export default function SelectCity(props) {
    return (
        <div className="SelectCity">
            {/* {
                <div className="SelectCity-select active" >Select city</div>
            } */}

            {renderCityList(props)}
        </div>
    )
}
