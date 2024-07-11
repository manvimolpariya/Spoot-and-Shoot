import React from 'react'
import './rightside.css'
import UpdateAdmin from '../update/UpdateAdmin'
import AdminReview from '../AdminReview/AdminReview'


const RightSide = () => {
  return (
    <div className='RightSide'>
     <div>
        <h3>Testimonials</h3>
        <UpdateAdmin/>
     </div>
     <div>
        <h3>Review</h3>
        <AdminReview />
     </div>
    </div>
  )
}

export default RightSide
