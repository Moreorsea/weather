import React from 'react'
import plugImage from '../../img/plugImage.png'
import './Plug.css'

export default function Plug() {
    return (
        <div className="Plug">
            <img src={plugImage} alt={"plugImage"} />
            <p>Fill in all the fields and the weather will be displayed</p>
        </div>
    )
}
