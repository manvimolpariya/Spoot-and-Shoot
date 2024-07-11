import React, { useState } from 'react'
import Footer from '../footer/Footer'
import './feedback.css'
import { feedbackMessage } from '../../api/internal'
import { useNavigate } from 'react-router-dom'
const Feedback = () => {
  const navigate =useNavigate();
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [message, setMessage] =  useState();
  const [gmail, setGmail] =  useState();
  const feedbackMessageSend = async (e) =>{
    e.preventDefault();
   try {
   
     const data ={
       username,
       contact,
       message,
       gmail
      }
        const response  = await feedbackMessage(data);
        if(response.status === 200){
          navigate('/');
        }
   } catch (error) {
    console.log(error);
   }
  }
  return (
   
  <>
     
      <div className='feedback-form'>
        <form onSubmit={feedbackMessageSend}>
      <div className='feedback-raise-form'>
          <div className="input-group-1">
           <input type="text" 
           id='feeback-name'
            required
            onChange={(e) => setUsername(e.target.value)}/>
           <label htmlFor="feeback-name"> <i className="fa-solid fa-user"></i> Your Good Name</label>
         </div>
           <div className="input-group-1">
            <input type="number"
             id='feedback-contact' 
             required
             onChange={(e) => setContact(e.target.value)}
             />
            <label htmlFor="feedback-contact"><i className="fa-solid fa-phone"></i> Contact</label>
           </div>
       </div>

          <div className="input-group-1">
        <input type="gmail"
         id='feedback-gmail'
          required
          onChange={(e) => setGmail(e.target.value)}
          />
        <label htmlFor="feedback-gmail"> <i className="fa-regular fa-envelope"></i> Gmail</label>
          </div>
          <div className="input-group-1">
          <textarea
           id='feedback-message' 
           rows='8' 
           required
           onChange={(e) => setMessage(e.target.value)}
           />
          <label htmlFor="feedback-message"><i className="fa-solid fa-message"></i> Type your message here</label>
          </div>
        <button type='submit' id="btn-report">Submit <i className="fa-solid fa-paper-plane"></i></button>
         
        </form>
      </div>
      <Footer />
      </>
    )
}

export default Feedback;


