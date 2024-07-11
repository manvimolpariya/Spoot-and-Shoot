import React, { useEffect, useState } from 'react'
import './ImageVerification.css'
import upload from '/upload.png'
import { uploadVerificationImage } from '../../api/internal'
const CommentAndImage = () => {
  const [missing_image1, setUploadImage] =useState(null);
  const [missing_image, setImage] = useState();
  const [peraset, setPera] = useState();
  const [perachange, setPeraChange] = useState(false);
 
  const getPhoto = (e) =>{
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      setUploadImage(reader.result); 
    }
  }
  const handleImageUpload = async(e) =>{
    e.preventDefault();
   
    const  formData = new FormData();
    formData.append('missing_image', missing_image)
  const response = await uploadVerificationImage(formData);
    if(response.status === 200 ){
      setPera(response.data.Image);
       setPeraChange(true);
    }
   else{
      setPera(response.response.data.Image);
      setPeraChange(true);

    }
  }
  useEffect(() =>{
      setPera(null);
  },[missing_image1])
  return (
  
   <>
    <div className='uploadimage'>
       <form  encType='multipart/form-data' onSubmit={handleImageUpload}>
        <div className='drop-area'>
        <input type='file' 
        name='missing_image'
        id='file-input'
        onChange={getPhoto}
        />
         {
          missing_image1 ?<button type='submit' className="compare-button"><div>
            <img src={missing_image1} alt="" className='img-adjust' />
          </div></button> :
          <div id='image-view' >
           <img src={upload} alt="" />
           <p>Check missing file report<br></br> for uploaded image</p>
           <span>uplaod image for verification</span>
        </div>
         }
       
        </div>
      <div className='image-found-status'>  {
      perachange ? <div>{peraset} Our team will reached you soon for more update see our stories</div> :  <div>{peraset} </div>
    }</div>
    </form>
   
      </div>
     
      </>
  )
}
export default CommentAndImage
