import React from 'react'
import {Link ,NavLink} from 'react-router-dom'
import './navbar.css'
const Navbar = ({contains}) => {
  return (
   
      <nav className={`${contains}`}>
    <NavLink to={'/'} className="fa-solid fa-house-user navlink"> Home</NavLink>
    <NavLink to={'/About'} className="fa-solid fa-circle-info navlink"> About us</NavLink>
    <NavLink to={'/MissingReport'}  className="fa-solid fa-person-circle-question navlink"> Rise Report</NavLink>
    <NavLink to={'/Enquiry'}className="fa-solid fa-briefcase navlink"> View Report</NavLink>
    <NavLink to={'/SpotAndShoot'} className="fa-solid fa-user navlink"> Story</NavLink>
    <NavLink to={'/Feedback'} className="fa-solid fa-book navlink"> Feedback</NavLink>
    
   
   </nav>
    
  )
}

export default Navbar
