import React, { useState } from 'react'
import "./userlist.scss"
import AdminNavBar from '../../../components/admin/adminNavbar/AdminNavBar'
import AdminLeftBar from '../../../components/admin/adminLeftBar/AdminLeftBar'
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from "../../../data/fakeUserList"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';

function UserList() {

    const [data, setData] = useState(rows)

    const handDelete = (id) => {
        setData(data.filter(item => item.id !== id
        ))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
                return <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                    <img
                        style={{
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                        src={params.row.avatar}
                        alt="" />
                    <p>{params.row.username}</p>
                </div>
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                        <NavLink to={"/user/" + params.row.id}>
                            <button
                                style={{
                                    border: "none",
                                    borderRadius: "10px",
                                    padding: "5px 10px",
                                    background: "#3bb077",
                                    color: "#fff",
                                    cursor: "pointer"
                                }}>
                                Edit
                            </button>
                        </NavLink>
                        <DeleteOutlineIcon
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() => handDelete(params.row.id)} />
                    </div>
                )
            }
        },
    ];

    return (
        <div className='user-list-container'>
            <AdminNavBar />
            <div className='user-list-bottom'>
                <AdminLeftBar />
                <div className='bottom-right'>
                    <div style={{ height: '70vh', width: '100%' }}>
                        <DataGrid
                            disableRowSelectionOnClick
                            rows={data}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList