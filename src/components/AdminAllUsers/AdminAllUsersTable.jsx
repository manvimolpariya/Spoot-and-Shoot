import React, { useEffect, useState } from 'react'
import { getUsersDetails } from '../../api/internal';
import './adminAllUsersTable.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';





const AdminAllUsersTable = () => {


  const [report, setReport] = useState([]);
  useEffect(()=>{
  
     (async() =>{
    const response = await getUsersDetails();
     if(response.status === 201){
     
      setReport(response.data.getperson);
         console.log(report)
     }
    }
     )()
   
   
  },[]);
  return (
    <div className='table1'>
      <h3>User Details</h3>
    <TableContainer component={Paper}
     style={{boxShadow : '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="left">UserName</TableCell>
            <TableCell align="left">Mail Id</TableCell>
            <TableCell align="left">Id Proof</TableCell>
            <TableCell align="left">User ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {report.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  align='left'>{row.username}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.idProof}</TableCell>
              <TableCell align="left">{row._id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AdminAllUsersTable