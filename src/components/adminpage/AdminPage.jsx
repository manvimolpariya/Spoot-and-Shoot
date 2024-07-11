import React, { useEffect } from 'react'
import './adminpage.css'
import Sidebar from '../sidebar/Sidebar'
import MainDash from '../maindash/MainDash'
import RightSide from '../rightSide/RightSide'

const AdminPage = ({setIsAdminRoute}) => {
  useEffect(() => {
    setIsAdminRoute(true);
    return () => setIsAdminRoute(false);
  }, [setIsAdminRoute]);
  return (
    <div className='admin_div'>
     <div className="appGlass">
      <Sidebar/> 
      <MainDash/>
      <RightSide/>
     </div>
    </div>
  )
}

export default AdminPage
