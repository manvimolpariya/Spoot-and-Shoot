import React, { useState } from 'react'
import './sidebar.css'
import logo from '/logo.svg'
import { SideBarData } from './SideBarData'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Sidebar = () => {

     const [selected, setSelected] = useState(0)
     const [expanded, setExpanded] = useState(true)

     const sidebarVarients = {
      ture : {
        left : '0'
      },
      false :{
        left : '-60%'
      }
     }
  return (
    <>
    <div className='bars'  style={expanded? {left :'60%'}:{left: '5%'}}
    onClick={()=>setExpanded(!expanded)}
    >
    <i className='fas fa-times cursor-pos'></i>
    </div>
    <motion.div className='sidebar'
    variants={sidebarVarients}
    animate={window.innerWidth<=768 ? `${expanded}` : ''}
    >
    <div className="sidebarlogo">
    <img src={logo} alt="" />
    <span>
        TO<span>PI</span>CS
    </span>
    </div>
    <div className='sidebar-menu'>
        {
           
           SideBarData.map((item, index) =>{
            return (
               <div className={selected === index ? 'sidebarMenuItem sidebaractive' : 'sidebarMenuItem'}
                key={index}
                onClick={()=>setSelected(index)}
                >
                <Link to={item.link} className='LinkItems'>
                <i className={item.icon}></i>
                <span> {item.heading}</span>
                </Link>
                </div>
            )
           })
        } 
        <div className='sidebarMenuItem'>
        <Link to={'/'}><i className='fa-solid fa-right-from-bracket'
          style={{fontSize : '1.3rem'}}></i></Link>
        </div>
    </div>
    </motion.div>
    </>
  )
}
  
export default Sidebar
