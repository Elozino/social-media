import React from 'react'
import "./TrendCard.css"
import { TrendData } from "../../Data/TrendData.js"


const TrendCard = () => {
  return (
    <div className='TrendCard'>
      <h3>Trends for you</h3>
      {TrendData.map((trend, id) => (
        <div className="trend">
          <span>#{trend.name}</span>
          <span>{trend.shares}k shares</span>
          <span></span>
        </div>
      ))}
    </div>
  )
}

export default TrendCard