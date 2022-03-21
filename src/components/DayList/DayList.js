import React from 'react'
import './DayList.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DayList(props) {
  console.log(props.transform)

  function getIcon(icon) {
    let src = `../../images/weather/${icon}.png`
    return src
  }

    return (
      <div className="DayList">
        <div className="DayList-wrapper" style={{transform: props.transform}}>
          {
              props.forecast.map((item, index) => {
                  return (
                    <div className="DayCard" key={index}>
                        <p className="DayCard-date">{item.timestamp}</p>
                        <div className="DayCard-weather">
                            <img src={getIcon(item.icon)} alt="this.props.icon" />
                        </div>
                        <p className="DayCard-temp">{item.temp}<span>°</span></p>
                    </div>
                  )

              })
          }
        </div>
      </div>
    )
}

export default DayList
