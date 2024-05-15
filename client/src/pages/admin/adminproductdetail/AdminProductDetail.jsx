import React from 'react'
import "./adminProductDetail.scss"
import { NavLink } from 'react-router-dom'
import AdminNavBar from '../../../components/admin/adminNavbar/AdminNavBar'
import AdminLeftBar from '../../../components/admin/adminLeftBar/AdminLeftBar'
import Chart from '../../../components/admin/chart/Chart'
import { productData } from "../../../data/chartData"
import PublishIcon from '@mui/icons-material/Publish';

function AdminProductDetail() {
    return (
        <div className='detail-user-container'>
            <AdminNavBar />
            <div className='detail-user-bottom'>
                <AdminLeftBar />
                <div className='bottom-right'>
                    <div className="user-title-container">
                        <h1 className='user-title'>Update Product</h1>
                        <NavLink to="/newProduct">
                            <button className="user-add-btn">Create</button>
                        </NavLink>
                    </div>
                    <div className="product-top">
                        <div className="product-top-left">
                            <Chart data={productData} title="Sales Performance" dataKey="Sales" />
                        </div>
                        <div className="product-top-right">
                            <div className="product-info-top">
                                <img src="/images/products/product1.jpg" alt="" className="product-info-img" />
                                <div className="product-name">Simple Liy Rose</div>
                            </div>
                            <div className="product-info-bottom">
                                <div className="product-info-item">
                                    <div className="product-info-key">id:</div>
                                    <div className="product-info-value">123</div>
                                </div>
                                <div className="product-info-item">
                                    <div className="product-info-key">sales:</div>
                                    <div className="product-info-value">5123</div>
                                </div>
                                <div className="product-info-item">
                                    <div className="product-info-key">in stock:</div>
                                    <div className="product-info-value">no</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-bottom">
                        <form className="product-form">
                            <div className="product-form-left">
                                <label> Product Name </label>
                                <input type="text" placeholder='Simple Lily Rose' />
                                <label> Price </label>
                                <input type="text" placeholder='150000' />
                                <label> In Stock </label>
                                <select name="inStock" id="inStock">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="product-form-right">
                                <div className="product-upload">
                                    <img src="/images/products/product1.jpg" alt="product_img" className="product-upload-img" />
                                    <label for="file">
                                        <PublishIcon style={{ cursor: "pointer" }} />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <button className="product-btn">Update</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminProductDetail