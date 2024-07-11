import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar';

import AdminAllUsersTable from '../AdminAllUsers/AdminAllUsersTable';
import { getUsersDetails } from '../../api/internal';

const AdminAllUsers = ({setIsAdminRoute}) => {
  
 
    useEffect(() => {
        setIsAdminRoute(true);
        return () => setIsAdminRoute(false);
      }, [setIsAdminRoute]);
  return (
   
    <div className='adminReport'>
    <div className='appGlass1'>
      <Sidebar/>
      <AdminAllUsersTable/>
    </div>
   </div>
  )
}

export default AdminAllUsers
