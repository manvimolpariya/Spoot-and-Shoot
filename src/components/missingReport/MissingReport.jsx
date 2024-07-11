import React from 'react'
import Footer from '../footer/Footer'
import './missing.css'
import { useState } from 'react'

import { reportSubmit } from '../../api/internal'
import { useNavigate } from 'react-router-dom'
const MissingReport = () => {
 const [person_name, setPersonName] = useState();
 const [gaurdian_name, setGardianName] = useState();
 const [missing_date, setMissingDate] = useState();
 const [age, setMissingAge] = useState();
 const [religion, setReligion] = useState();
 const [gender, setGender] = useState();
 const [IdProof, setMissingIdProof] = useState();
 const [missing_location, setMissingLocation] = useState();
 const [contact, setGardiancontact] = useState();
 const [missing_image, setmissingPersonPhoto] = useState();
 const navigate = useNavigate();
 const handleMissingReportSubmit = async (e) =>{
  e.preventDefault();
  try {
    const data = { person_name,
       gaurdian_name,
       missing_date,
       age, 
       religion,
       gender,
       IdProof,
       missing_location,
       contact,
       missing_image};
       const formData =new FormData();
       formData.append('person_name',  person_name)
        formData.append('gaurdian_name', gaurdian_name)
         formData.append('missing_date', missing_date)
          formData.append('age',  age)
           formData.append('religion', religion)
            formData.append('gender', gender)
             formData.append('IdProof', IdProof)
              formData.append('missing_location', missing_location)
               formData.append('contact', contact)
                formData.append('missing_image', missing_image)
       const response = await reportSubmit(formData);
       console.log(response);
       if(response.status === 201){
        navigate('/Enquiry');
       }
  } catch (error) {
    console.log(error);
  }
 } 
   return (
    <>
    <div className='report-rise-form'>
      <form encType='multipart/form-data' onSubmit={handleMissingReportSubmit} >
    <div className='missing-report-row-1'>
        <div className="input-group">
         <input type="text" id='name' name='person_name' onChange={(e) => setPersonName(e.target.value)} required/>
         <label htmlFor="name"> <i className="fa-solid fa-user"></i> Person Name</label>
       </div>
         <div className="input-group">
          <input type="text" id='gaurdian-name' name='gaurdian_name' onChange={(e) => setGardianName(e.target.value)} required/>
          <label htmlFor="gaurdian-name"><i className="fa-solid fa-user"></i> Gaurdian's Name</label>
         </div>
     </div>
     <div className='missing-report-row-1'>
        <div className="input-group">
      <input type="date"
       id='missing-date'
       name='missing_date'
       onChange={(e) => setMissingDate(e.target.value)}
       required/>
        </div>
        <div className="input-group">
      <input type="number" 
      id='age' 
      name='ge'
      onChange={(e) => setMissingAge(e.target.value)}
      required/>
      <label htmlFor="age"><i className="fa-brands fa-pagelines"></i> Age</label>
        </div>
        </div>
        <div className="input-group">
      <input type="text"
       id='religion'
       name='religion' 
       onChange={(e) => setReligion(e.target.value)}
       required/>
      <label htmlFor="religion"> <i className="fa-solid fa-question"></i> Religion</label>
        </div>
        <div className="input-group">
      <input type="text" 
      id='sex'
      name='gender'
      onChange={(e) => setGender(e.target.value)}
       required/>
      <label htmlFor="sex"><i className="fa-solid fa-person-half-dress"></i> Sex</label>
        </div>
        <div className="input-group">
      <input type="text" 
      id='idProof'
      name='IdProof' 
      onChange={(e) => setMissingIdProof(e.target.value)}
      required/>
      <label htmlFor="idProof"><i className="fa-solid fa-person-half-dress"></i> Adhar card / pancard / passport</label>
        </div>
        <div className="input-group">
        <textarea id='address' rows='8'
        name='missing_location'
         required
         onChange={(e) => setMissingLocation(e.target.value)}
         />
        <label htmlFor="address"><i className="fa-solid fa-location-dot"></i> missing location</label>
        </div>
        <div className='missing-report-row-1'>
        <div className="input-group">
         <input type="number"
          id='contact'
           required
           name='contact'
           onChange={(e) => setGardiancontact(e.target.value)}
           />
         <label htmlFor="contact"><i className="fa-solid fa-phone"></i> Contact</label>
        </div>
        <div className="input-group">
      <input type="file" 
      id='photo'  name='missing_image'
      required
      onChange={(e) => setmissingPersonPhoto(e.target.files[0])}
      />
      </div>
      </div>
      <button type='submit' id="btn-report">Submit <i className="fa-solid fa-paper-plane"></i></button>
       
      </form>
    </div>
    <Footer />
    </>
  )
}

export default MissingReport
