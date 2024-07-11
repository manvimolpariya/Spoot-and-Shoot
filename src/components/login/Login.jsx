import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import loginSchema from './LoginSchema'
import { login } from '../../api/internal'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/userSlice'
const Login = () => {
  const [username, setUsername] =useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) =>{
    e.preventDefault();
    try {
      await loginSchema.validate({ username, password }, { abortEarly: false });
        const data = { username, password};
      const response = await login(data);
      console.log(response);
       if(response.status === 200){
        const user = {
           _id : response.data.user._id,
          email : response.data.user.email,
          username : response.data.user.username,
          auth : response.data.auth,
        }
        dispatch(setUser(user));
        navigate('/');
       }
       else if(response.code === 'ERR_BAD_RESPONSE'){
        setError(response.message);
      }
       else if (response.code === 'ERR_BAD_REQUEST'){
        setError(response.response.data.message);
     }
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errorMessage = error.inner.reduce((messages, err) => {
          messages[err.path] = err.message;
          return messages;
        }, {});
        setValidationErrors(errorMessage);
      } else {
        // Other errors
        console.log(error);
      }
    }
  }
  return (
    <div className='login-container'>
       
        <form onSubmit={handleLogin}>
        <div className='login-form'>
        <h1>Login your account</h1> 
           <input type="text"
            placeholder='username'
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            />
            {validationErrors.username && (
            <div className='error-message'>{validationErrors.username}</div>
          )}
           <input type="password" 
            placeholder='password'
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            />
             {validationErrors.password && (
            <div className='error-message'>{validationErrors.password}</div>
          )}
        </div>
        <div className='login-btn-div'>
        <button className='login-btn' type='submit'>
            Log in
        </button>
        </div>
        </form>
        <div className='login-to-signup'>
        <p>Don't have an account? <Link  className='link-color' to='/signup'> Register</Link></p>
        {error !==  "" ? <p className="login-error-message">wrong password or username </p>  : ""}
        </div>
    </div>
  )
}

export default Login
