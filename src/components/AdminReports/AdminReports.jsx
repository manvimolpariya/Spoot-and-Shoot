import React, { useEffect } from 'react'
import './adminreport.css'
import Sidebar from '../sidebar/Sidebar';
import AdminReportsCards from '../adminreportcards/AdminReportsCards';
const AdminReports = ({setIsAdminRoute}) => {
    useEffect(() => {
        setIsAdminRoute(true);
        return () => setIsAdminRoute(false);
      }, [setIsAdminRoute]);
  return (
    <div className='adminReport'>
     <div className='appGlass1'>
       <Sidebar/>
       <AdminReportsCards/>
     </div>
    </div>
  )
}

export default AdminReports
