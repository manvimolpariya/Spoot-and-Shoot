import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {setUser} from '../../store/userSlice'
import { signup } from '../../api/internal'
import { useDispatch } from 'react-redux'
import SingupSchema from './SignupSchema'
const Signup = () => {
  const [name, setName] = useState()
  const [idProof, setIdProof] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
 const [error, setError] =useState("");
 const [validationErrors, setValidationErrors] = useState({});
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
   try {
    await SingupSchema.validate({ username, password, idProof, name, email}, { abortEarly: false });
    const data ={
   name , idProof, username , email , password
    }
    const response = await signup(data);
    console.log(response);
    if(response.status === 201){

      const user = {
         _id : response.data.createUser._id,
        email : response.data.createUser.email,
        username : response.data.createUser.username,
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
    <div>
       <div className='signup-container'>
      
        <form onSubmit={handleSubmit}> 
        <div className='signup-form'>
        <h1>Signup your account</h1>
        <input type="text"
         placeholder='name'
         onChange={(e) => setName(e.target.value)}
        />
        {validationErrors.name && (
            <div className='error-message'>{validationErrors.name}</div>
          )}
        <input type ="text" 
        placeholder='Id Proof'
        onChange={(e) => setIdProof(e.target.value)}
        />
        {validationErrors.idProof && (
            <div className='error-message'>{validationErrors.idProof}</div>
          )}
        <input type="text" 
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
        />
        {validationErrors.username && (
            <div className='error-message'>{validationErrors.username}</div>
          )}
        <input type="text"
         placeholder='email'
         onChange={(e) => setEmail(e.target.value)}
         />
         {validationErrors.email && (
            <div className='error-message'>{validationErrors.email}</div>
          )}
        <input type="password" 
         placeholder='password'
         onChange={(e) => setPassword(e.target.value)}
         />
         {validationErrors.password && (
            <div className='error-message'>{validationErrors.password}</div>
          )}
        </div>
        <div className='signup-btn-div'>
        <button type='submit' className='signup-btn'>
            Sign up
        </button></div>
        </form>
        <div className='signup-to-login'>
        <p>Already have an account?  <Link className='link-color' to='/login'> Login</Link></p> 
        { error !==  "" ? <p className="error-message">fill correct information</p>  : ""}
        </div>
    </div>
    </div>
  )
}

export default Signup
