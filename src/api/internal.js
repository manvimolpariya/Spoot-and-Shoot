import axios from 'axios'
const api = axios.create({
    baseURL :  `http://localhost:5000/api/v1/users`,
    withCredentials : true,
    headers :{
        'Content-type' : 'application/json',
    },
 });

 const api1 = axios.create({
   baseURL :  `http://localhost:5000/api/v1/users`,
   withCredentials : true,
   headers :{
       'Content-type' : 'multipart/form-data',
   },
});
 export const signup = async (data) =>{
    let response ;
    try{
       response = await api.post('/register', data);
    }catch(error){
        console.log(error);
        return error;
    }
   return response ;
 }

 export const login = async (data) =>{
    let response ;
    try {
        response = await api.post("/login", data);
    } catch (error) {
        console.log(error);
        return error;
    }
    return response ;
 }

 export const signout = async() =>{
    let response;
    try {
       response = await api.post('/logout');
    } catch (error) {
        console.log(error);
       return error; 
    }
    return response;
 }

 export const reportSubmit = async(data) =>{
   let response ;
   try {
      response = await api1.post('/missingReport', data)
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
 }
 export const getdetail = async () =>{
   let response ;
   try {
      response = await api.get('/missingDetails');
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
 }

 export const getAllDetails = async () =>{
   let response ;
   try {
      response = await api.get('/allMissingDetails');
   } catch (error) {
      console.log(error);
      return error;
   }
     return response;
 }
 export const sendContactMessage = async (data) =>{
    let response ;
  try {
    response = await api.post('/contact', data)
  } catch (error) {
   console.log(error);
   return error ;
  }
    return response;
 }
 export const feedbackMessage =async (data) =>{
   let response;
   try {
      response = await api.post('/feedback', data);
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
 }
 export const getReport = async(id) =>{
   let response;
   try {
      response = await api.get(`/getReport/${id}`);
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
 }
 export const updateImage = async (id, data) =>{ 
   let response; 
 try {
   response = await api1.patch(`/updateImage/${id}`, data)
 } catch (error) {
   console.log(error);
   return error;
 }
 return response;
}
export const updateDetails = async (id, data) =>{
   let response; 
   try {
      response = await api.patch(`/updatedetails/${id}`, data)
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
}
export const deleteReport = async (id) =>{
   let response;
   try {
      response = await api.delete(`/deleteReport/${id}`)
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
}
export const uploadVerificationImage = async (data) =>{
   let response ;
   try {
      response = await api1.post('/compareImage', data) ; 
   } catch (error) {
      console.log(error);
      return error;
   }
   return response ;
}

export const Adminlogin = async (data) =>{
   let response ;
   try {
       response = await api.post("/AdminLogIn", data);
   } catch (error) {
       console.log(error);
       return error;
   }
   return response ;
}
export const getReport1 = async(id) =>{
   let response;
   try {
      response = await api.get(`/AdmingetReport/${id}`);
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
 }
 export const deleteReport1 = async (id) =>{
   let response;
   try {
      response = await api.delete(`/AdmindeleteReport/${id}`)
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
}
export const updateImage1 = async (id, data) =>{ 
   let response; 
 try {
   response = await api1.patch(`/AdminupdateImage/${id}`, data)
 } catch (error) {
   console.log(error);
   return error;
 }
 return response;
}
export const updateDetails1 = async (id, data) =>{
   let response; 
   try {
      response = await api.patch(`/Adminupdatedetails/${id}`, data)
   } catch (error) {
      console.log(error);
      return error;
   }
   return response;
}
export const getUsersDetails = async () =>{
   let response ;
   try {
      response = await api.get('/AllUsers');
   } catch (error) {
      console.log(error);
      return error;
   }
     return response;
 }