import React from 'react'
import './adminreview.css'
import Chart from 'react-apexcharts'
const AdminReview = () => {
   const data = {
      series : [
               {
                 name : "Review",
                 data : [10, 50, 30, 90, 40, 120, 100],
               },
             ],
      options : {
          chart : {
              type : "area",
              height : 'auto'
          },
          dropShadow :{
              enabled : false,
            //   enabledOnSeries : undefined,
            //   top : 0,
            //   left  : 0,
            //   blur : 3,
            //   color : '#000',
            //   opacity : 0.35
          },
          fill : {
            colors : ["#FFF"],
             type : "gradient",
          },
          dataLabels : {
              enabled : false,
          },
          stroke : {
              curve : "smooth",
              colors : ["#ff929f"]
          },
         tooltip :{
           x:{
              format : 'dd/MM/yy HH:mm',
           },
         },
         grid :{
          show : false
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
         },
         yaxis : {
                   show : false
       },
       toolbar : {
                   show : false
                }
      }
  }
  
  return (
    <div className='CustomerReview'>
      <Chart series={data.series}  type='area' options={data.options}/>
    </div>
  )
}

export default AdminReview
