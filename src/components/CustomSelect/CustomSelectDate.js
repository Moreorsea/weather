import React, {useState} from 'react'
import './CustomSelect.css'
import Select from 'react-select'
import dayjs from 'dayjs'

function CustomSelectDate(props) {
  console.log(props)
  function formatDate(date) {
      let day = dayjs.unix(date)
      return day.$D + '/' + day.$M + '/' + day.$y
  }

  let data = props.options
  let options = generateOptions(data)

  function generateOptions(data) {
    let optionsArr = []
    data.map((item) => {
      let el = {}
      el['value'] = item
      el['label'] = formatDate(item)

      optionsArr.push(el)
    })
    return optionsArr
  }

  document.addEventListener('click', (e) => {
    console.log(e.target)
  })

  return (
    <Select options={options} onClick={props.changeDate} />
  )
}

export default CustomSelectDate;
