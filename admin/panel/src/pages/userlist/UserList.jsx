import React from 'react'
import "./userList.css"
import { DataGrid} from '@mui/x-data-grid';

function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user-list-user">
            <img className="user-list-img" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'transaction', headerName: 'Transaction', width: 130 },

    
  ];
  
  const rows = [
    { 
      id: 1, 
      username: 'John Snow', 
      avatar: "images/admin.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    { 
      id: 1, 
      username: 'John Snow', 
      avatar: "images/admin.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    { 
      id: 1, 
      username: 'John Snow', 
      avatar: "images/admin.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
   
  ];
  
  
  return (
    <div className='user-list'>
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

    </div>
  )
}

export default UserList