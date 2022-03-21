import React  from 'react'
import './SelectDate.css'
import dayjs from 'dayjs'

function SelectDate(props) {
  function formatDate(date) {
      let day = dayjs.unix(date)
      return day.$D + '/' + day.$M + '/' + day.$y
  }
        return (
            <div className="SelectDate">
                <select onChange={props.changeDate}>
                  <option selected>Select date</option>
                  {
                    props.options.map((item, index) => {
                      return <option key={index} value={item}>{formatDate(item)}</option>
                    })
                  }
                </select>

            </div>
        )
}

export default SelectDate;
