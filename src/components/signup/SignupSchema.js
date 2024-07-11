import  * as yup from 'yup';
const errorMessage = 'use lowercase uppercase and digits';
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const SingupSchema = yup.object().shape({
    name : yup.string().max(30).required('name is required'),
    username : yup.string().min(5).max(30).required('username is required'),
    password : yup.string().min(8).max(30).matches(passwordPattern, {message : errorMessage}).required('password field is required'),
    email : yup.string().email().required('email is required'),
    idProof : yup.string().min(5).required('Id proof is required'),

});
export default SingupSchema