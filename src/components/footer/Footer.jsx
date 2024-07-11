import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <> <div className='footer'>
    <div className='footer-container'>
   <div className='zero-section'>
    <div>
    <h1>Spot And Shoot</h1>
    </div>
       <div className='footer-incons'>
      <Link to='https://github.com/manvimolpariya/' target='_blank'><i className="fa-brands fa-github"></i></Link>
      <Link to='https://www.linkedin.com/in/manvi-molpariya-385881293' target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
      <Link to='https://api.whatsapp.com/send?phone=9617653989' target='_blank'><i className="fa-brands fa-whatsapp"></i></Link>
      <Link to='https://telegram.me/@manviiii3031' target='_blank'><i className="fa-brands fa-telegram"></i></Link>
       </div>
   </div>
 <div className='first-section'>
 <ul>
   <Link to='/'><li>Home</li> </Link>
   <Link to='/About'><li>About us</li></Link>
   <Link to='/MissingReport'><li>Rise Report</li></Link>
   <Link to='/Enquiry'><li>Story</li></Link>
   <Link to='/SpotAndShoot'><li>Spot Shoot</li></Link>
   <Link to='/Feedback'><li>Feedback</li></Link>
 </ul>
 </div>

<div className='second-section'>
 <ul>
   <Link to='https://maps.app.goo.gl/XzjXvMS37MVjbUiS6' target='_blank'><li><span><i className="fa-solid fa-location-dot"></i></span> Surya Dev Nagar Hawa Baunglow.</li></Link>
   <Link to="tel:9617653989" target="_blank"><li><span><i className="fa-solid fa-phone"></i></span> 91+9167653989</li></Link>
   <Link to='https://manvimolpariya@gmail.com' target="_blank"><li><span><i className="fa-solid fa-envelope"></i></span> ManviMolpariya@gmail.com</li></Link>
  
 </ul>
</div>
</div>
<div className='auther-name'>
<p>&#9400; 2023 All Rights Reserved | Manvi Molpariya</p>
</div>
</div>
</>
  )
}

export default Footer
