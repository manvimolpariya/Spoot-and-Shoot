import React from 'react'
import './update.css'
import { updatesData } from './updateData'
const UpdateAdmin = () => {
  return (
    <div className="Updates">
      {updatesData.map((updates, index)=>{
      return (
        <div key={index} className="update">
            <img src={updates.img} alt="" />
            <div className="noti">
                <div style={{marginBottom :'0.5rem'}}>
                    <span>{updates.name}</span><br></br>
                    <span> {updates.noti}</span>
                </div>
                <span>{updates.time}</span>
            </div>
           
           
        </div>
      )
      })}
    </div>
  )
}

export default UpdateAdmin
