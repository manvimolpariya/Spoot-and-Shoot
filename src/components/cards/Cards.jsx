import React from 'react'
import {cardData} from  './cardData'
import Card from '../card/Card'
import './card.css'
const Cards = () => {
  return (
    <div className='cards'>
      {cardData.map ((card, index) =>{
           return(
            <div key={index} className="parentContainerCard" >
                <Card  
                 title = {card.title}
                 color = {card.color}
                 barValue = {card.barValue}
                 value = {card.value}
                  png = {card.png}
                 series= {card.series}
                />
            </div>
           )
      })}
    </div>
  )
}

export default Cards
