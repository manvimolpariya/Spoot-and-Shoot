import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSchema from './AdminSchema';
import { Adminlogin } from '../../api/internal'
const Admin = () => {

  // useEffect(() => {
  //   setIsAdminRoute(true);
  //   return () => setIsAdminRoute(false);
  // }, [setIsAdminRoute]);
  
    const [username, setUsername]= useState();
    const [password, setPassword]=useState();
    const [error, setError] = useState('');
    
   const navigate = useNavigate();
    const handleAdminLogin = async (e) =>{
      e.preventDefault();
      try {
      
          const data = { username, password};
        const response = await Adminlogin(data);
        console.log(response);
         if(response.status === 201){
        
          navigate('/adminpage');
         }
         else if(response.code === 'ERR_BAD_RESPONSE'){
          setError(response.message);
        }
         else if (response.code === 'ERR_BAD_REQUEST'){
          setError(response.response.data.message);
       }
      } catch (error) {
        
          // Other errors
          console.log(error);
        
      }
    }
    return (
      <div className='login-container'>
         
          <form onSubmit={handleAdminLogin}>
          <div className='login-form'>
          <h1>Login your account</h1> 
             <input type="text"
              placeholder='username'
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              />
              
             <input type="password" 
              placeholder='password'
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              />
              
          </div>
          <div className='login-btn-div'>
          <button className='login-btn' type='submit'>
              Log in
          </button>
          </div>
          </form>
          <div className='login-to-signup'>
          {error !==  "" ? <p className="login-error-message">wrong password or username </p>  : ""}
          </div>
      </div>
    )
  }

export default Admin
