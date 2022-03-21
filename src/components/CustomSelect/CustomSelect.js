import React, {useState} from 'react'
import './CustomSelect.css'

function CustomSelect({name, options}) {
  const [isShow, setIsShow] = useState(false)

  function toggleList() {
    setIsShow(prev => !prev)
  }

  return (
    <div className={'Custom-Select' + (isShow ? ' show' : ' ')}>
      <div className="Custom-Select__input" onClick={toggleList}>
        <p>{name}</p>
      </div>

      <ul className="Custom-Select__list">
        {
          options.map((item, index) => {
            return <li key={index} className="Custom-Select__item" onClick={toggleList}>{item.text}</li>
          })
        }
      </ul>
    </div>
  )
}

export default CustomSelect;
