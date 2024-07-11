import React, { useEffect } from 'react'
import AdminUpdateContent from '../AdminUpdateContent/AdminUpdateContent';
import Sidebar from '../sidebar/Sidebar';

const AdminUpdateReports = ({setIsAdminRoute}) => {
   
    useEffect(() => {
        setIsAdminRoute(true);
        return () => setIsAdminRoute(false);
      }, [setIsAdminRoute]);
  return (
    <div className='adminReport'>
    <div className='appGlass1'>
      <Sidebar/>
      <AdminUpdateContent/>
    </div>
   </div>
  )
}

export default AdminUpdateReports
