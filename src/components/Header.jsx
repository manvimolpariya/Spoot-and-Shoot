import React from 'react'
import Navbar from './navbar/Navbar'
import './Header.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { resetUser } from '../store/userSlice'
import { signout } from '../api/internal'

import { useDispatch, useSelector } from 'react-redux'
function Header()  {
  const [menuOpened, setMenuOpend] =useState(false);
  const toggleManu = () => setMenuOpend(!menuOpened);
 const dispatch = useDispatch();
 const isAuthenticated = useSelector((state) => state.user.auth);
 const handleLogout = async() =>{
    await signout();
    dispatch(resetUser());
 }
  return (
   
    <div className='container'>
    <Link to='/admin'> <div className='logo'>
     <i className='fa-solid fa-user admin' alt="" />
    </div> </Link>
      <Navbar contains={ `${!menuOpened ? "navbar active" : "navbar"}`}/>
   <div className='btns-handler'>
    <div className='menu-icons'>
      {
        !menuOpened ? (
          <i className='fas fa-times cursor-pos' onClick={toggleManu}></i>
        ) : (   <i className= 'fas fa-bars cursor-pos' onClick={toggleManu}></i>)
      }
     
    </div>
    
    
   <div>
  {
    isAuthenticated ?  <Link to='/login'><button className='btn-logout' onClick={handleLogout}>Logout</button></Link> : 
    <><Link to='/login'><button className='btn-login'><i className="fa-solid fa-right-to-bracket"></i> LogIn</button></Link> 
    <Link to='/signup'><button className='btn-signup'>SignUp</button></Link>
    </> 
  }
  

      
   </div>
     

    </div>
    </div>
   
  )
}

export default Header
