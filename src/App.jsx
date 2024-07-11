import { useEffect, useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Feedback from './components/feedback/Feedback'
import Enquiry from './components/enquiry/Enquiry'
import MissingReport from './components/missingReport/MissingReport'
import SpotAndShoot from './components/spotandshoot/SpotAndShoot'
import CommentAndImage from './components/commentAndimage/CommentAndImage'
import Login from './components/login/Login'
import Protected from './components/protected/Protected'
import Signup from './components/signup/Signup'
import { useSelector } from 'react-redux'
import MissingDetail from './components/missingDetail/MissingDetail'
import Error from './components/error/Error'
import UpdateReport from './components/updateReport/UpdateReport'

import './App.css'
import Admin from './components/Admin/Admin'
import AdminPage from './components/adminpage/AdminPage'
import AdminReports from './components/AdminReports/AdminReports'
import AdminAllUsers from './components/AdminUsers/AdminAllUsers'
import AdminMissingReport from './components/Adminmissingreport/AdminMissingReport'
import AdminMissingReportUpdate from './components/adminMissingReportUpdate/AdminMissingReportUpdate'
import AdminUpdateReports from './components/AdminUpdateREports/AdminUpdateReports'


function App() {
  const isAuth = useSelector((state) => state.user.auth);
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  

  
  return (
   <>
   <BrowserRouter >
   <main>
   {!isAdminRoute && <Header/>}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/MissingReport' element={<Protected isAuth={isAuth}><MissingReport/></Protected>}/>
    <Route path='/Enquiry' element={<Protected isAuth={isAuth}><Enquiry/></Protected>}/>
    <Route path='/SpotAndShoot' element={<SpotAndShoot/>}/>
    <Route path='/Feedback' element={<Protected isAuth={isAuth}><Feedback/></Protected>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/MissingReport/:id' element={<Protected isAuth={isAuth}><MissingDetail/></Protected>}/>
    <Route path='/MissingReport/update-image/:id' element={<Protected isAuth={isAuth}><UpdateReport></UpdateReport></Protected>}/>
    <Route path='/uploadAndComment' element={<Protected isAuth={isAuth}><CommentAndImage/></Protected>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/adminpage' element={<AdminPage setIsAdminRoute={setIsAdminRoute}/>}/>
    <Route path='/AdminAllReports' element={<AdminReports setIsAdminRoute={setIsAdminRoute}/>}/>
    <Route path='/adminAllUsers' element={<AdminAllUsers setIsAdminRoute={setIsAdminRoute}/>}/>
    <Route path='/AdminMissingReport/:id' element={<AdminMissingReport setIsAdminRoute={setIsAdminRoute}/>}/>
    <Route path='/AdminMissingReport/:id' element={<AdminMissingReportUpdate setIsAdminRoute={setIsAdminRoute}/>}/>
    <Route path='/AdminMissingReport/update-image/:id' element={<AdminUpdateReports setIsAdminRoute={setIsAdminRoute}/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
     
   </main>
   </BrowserRouter>
 
    </>
  )
}

export default App
