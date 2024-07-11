import React from 'react'
import './maindash.css'
import Cards from '../cards/Cards'
import TableOne from '../table/TableOne'

const MainDash = () => {
  return (
    <div className='maindash'>
      <h1>Dashboard</h1>
      <Cards/>
      <TableOne/>
    </div>
  )
}

export default MainDash
