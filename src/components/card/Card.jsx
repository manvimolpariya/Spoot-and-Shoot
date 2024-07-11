import React, { useState } from 'react'
import {motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts'
import './cards.css'
const Card = (props) => {
const [expanded, setExpanded] = useState(false);
  return (
   <div >
    {
        expanded ? 
            <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
         : <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
    }
   </div>
  )
}



function CompactCard({param, setExpanded}){
    const png = param.png;
    return (
        <motion.div className='CompactCard'
        style={{background : param.color.backGround,
                boxShadow : param.color.boxShadow
        }}
        layoutId='expandableCard'
        onClick={setExpanded}
        >   
            <div className="radialBar">
            <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
            />
            <span>{param.title}</span>
            </div>
            <div className="details">
               {<i className={png}></i>}
               <span>${param.value}</span>
               <span>Last 24 Hours</span>
            </div>
            
        </motion.div>
    )
}

function ExpandedCard({param, setExpanded}){
    const data = {
        options : {
            chart : {
                type : "area",
                height : 'auto'
            },
            dropShadow :{
                enabled : false,
                enabledOnSeries : undefined,
                top : 0,
                left  : 0,
                blur : 3,
                color : '#000',
                opacity : 0.35
            },
            fill : {
                color : ["#fff"],
                type : "gradient",
            },
            dataLabels : {
                enabled : false,
            },
            stroke : {
                curve : "smooth",
                colors : ["white"]
            },
           tooltip :{
             x:{
                format : 'dd/MM/yy HH:mm',
             },
           },
           grid :{
            show : true,
           },
           xaxis :{
            type : 'datetime',
            categories :[
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
            ]
           }
        }
    }
 return(
    <motion.div className="ExpandedCard"
    //layoutId='expandableCard'
    style={{background : param.color.backGround,
    boxShadow: param.color.boxShadow}}
   
    >
<div   style= {{alignSelf : 'flex-end', cursor: 'pointer', color:'white'}}>
  
   <i className='fa-solid fa-xmark' onClick={setExpanded}></i>
</div>
<span>
    {param.title}
</span>
<div className='chartContainer'>
<Chart series={param.series} type='area' options={data.options}/>
</div>
<span>last 24 hours</span>
    </motion.div>
 )
}
export default Card
