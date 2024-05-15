import React, { useState } from 'react'
import "./adminProductList.scss"
import AdminNavBar from '../../../components/admin/adminNavbar/AdminNavBar'
import AdminLeftBar from '../../../components/admin/adminLeftBar/AdminLeftBar'
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../../data/fakeProductList"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';



function AdminProductList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
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
                        src={params.row.img}
                        alt="" />
                    <p>{params.row.title}</p>
                </div>
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
        },
        {
            field: 'price',
            headerName: 'Price',
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
                        <NavLink to={"/adminProduct/" + params.row.id}>
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

    const [data, setData] = useState(productRows)

    const handDelete = (id) => {
        setData(data.filter(item => item.id !== id
        ))
    }

    return (
        <div className='product-list-container'>
            <AdminNavBar />
            <div className='product-list-bottom'>
                <AdminLeftBar />
                <div className='bottom-right'>
                    <h1>Product Management</h1>
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

export default AdminProductList