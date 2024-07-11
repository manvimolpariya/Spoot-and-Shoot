import React from 'react'
import './table.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(MissingPerson, Contact, MissingDate, GardianName, Status) {
  return { MissingPerson, Contact, MissingDate, GardianName, Status };
}
const rows = [
  createData('Radhika Jain', 1022323, '2 March 2023', "Akash Jain", "Pending"),
  createData('John Doe', 2371022, '2 March 2023', "Sam Dae", "Found"),
  createData('Alice Kim', 1022323212, '2 March 2023', "Joon Kim", "Approved"),
  createData('Kriti Sone', 102232344, '2 March 2023', "Nitin Sone", "Approved"),
  createData('Sakshima Pal', 102232311, '2 March 2023', "Naveen Pal", "Found"),
];

const makeStyle =(status) =>{
if(status === 'Approved'){
  return {
   background : 'rgb(145 254 159/ 47%)',
   color : "green"
  }
}
else if (status === 'Pending'){
  return {
    background : '#ffadad8f',
    color : 'red'
  }
}
else {
  return {
    background : "#59bfff",
    color : "white"
  }
}
}
const TableOne = () => {
  return (
    <div className='table'>
      <h3>Recent Report</h3>
    <TableContainer component={Paper}
     style={{boxShadow : '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Missing Person</TableCell>
            <TableCell align="left">Contact</TableCell>
            <TableCell align="left">Missing Date</TableCell>
            <TableCell align="left">Gardian Name</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.MissingPerson}
              </TableCell>
              <TableCell align="left">{row.Contact}</TableCell>
              <TableCell align="left">{row.MissingDate}</TableCell>
              <TableCell align="left">{row.GardianName}</TableCell>
              <TableCell align="left">

                <span className='status' style={makeStyle(row.Status)}>{row.Status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

  );
}

export default TableOne
