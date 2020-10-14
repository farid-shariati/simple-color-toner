import React from 'react'
import ColorCard from '../ColorCard/ColorCard'
import './ColorsGrid.css'

const ColorsGrid = ({colors}) => {
    return (
        <div className="cards">
          {colors.map((item, index) => (
            <ColorCard key={index} backgroundColor={item} />
          ))}
        </div>
    )
}

export default ColorsGrid
