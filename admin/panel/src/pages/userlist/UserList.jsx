import React, { useState } from 'react'
import "./userList.css"
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material'
import { userRows } from '../../DummyData';
import { Link } from "react-router-dom";


function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter(item=>item.id !== id));
    };

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
    {
      field: 'action', headerName: 'Action', width: 150 ,
      renderCell: (params) => {
        return (
            <>
             
            <Link to={'/user/' +params.row.id}>
            <button className="user-list-edit">Edit</button>
            </Link>

            <DeleteOutline className="user-list-delete" onClick={()=>handleDelete(params.row.id)} />
            </>
        );
      },
    }, 
  ];
  
  
  
  return (
    <div className='user-list'>
      
      <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        // rowsPerPageOptions={[7]}
        checkboxSelection
      />

    </div>
  )
}

export default UserList