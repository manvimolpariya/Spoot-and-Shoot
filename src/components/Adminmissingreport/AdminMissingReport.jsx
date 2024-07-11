import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar';
import AdminMissingReportUpdate from '../adminMissingReportUpdate/AdminMissingReportUpdate';
import { useParams } from 'react-router-dom';
// import { getReport1 , deleteReport} from '../../api/internal';
const AdminMissingReport = ({setIsAdminRoute}) => {
  // const params = useParams();
  // const report = params.id;
  // const [reports, setReport] = useState('');
  // useEffect(()=>{
  //   const handleGetReport = async () =>{
  //    const  response = await getReport1(report);
  //      if(response.status === 200){
  //       console.log(response)
  //      setReport(response.data.findUser[0]);
      
  //      console.log(reports)
  //     }
  //   }
  
  //   handleGetReport();
  // },[])
    useEffect(() => {
        setIsAdminRoute(true);
        return () => setIsAdminRoute(false);
      }, [setIsAdminRoute]);
  return (
    <div className='adminReport'>
    <div className='appGlass1'>
      <Sidebar/>
      <AdminMissingReportUpdate />
    </div>
   </div>
  )
}

export default AdminMissingReport
