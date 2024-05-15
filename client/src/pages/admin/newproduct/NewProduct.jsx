import React from 'react'
import "./newProduct.scss"
import AdminNavBar from '../../../components/admin/adminNavbar/AdminNavBar'
import AdminLeftBar from '../../../components/admin/adminLeftBar/AdminLeftBar'
function Newproduct() {
    return (
        <div className='new-product-container'>
            <AdminNavBar />
            <div className='new-product-bottom'>
                <AdminLeftBar />
                <div className='bottom-right'>
                    <h1 className="new-product-title">New Product</h1>
                    <form className="new-product-form">
                        <div className="new-product-left">
                            <div className="new-product-item">
                                <label>Image</label>
                                <input type="file" />
                            </div>
                            <div className="new-product-item">
                                <label>Title</label>
                                <input type="text" placeholder='Simple Lily Rose' />
                            </div>
                            <div className="new-product-item">
                                <label>Stock</label>
                                <input type="text" placeholder='123' />
                            </div>
                            <button className="create-btn">Create</button>
                        </div>
                        <div className="new-product-right">
                            <div className="new-product-item">
                                <label>Description</label>
                                <input type="text" placeholder='...' />
                            </div>
                            <div className="new-product-item">
                                <label>Price</label>
                                <input type="text" placeholder='price' />
                            </div>
                            <div className="new-product-item">
                                <label style={{ marginBottom: "10px" }}>Materials</label>
                                <div className="new-product-materials">
                                    <input type="checkbox" name='materials' id="love" value="love" />
                                    <label for="love">Love</label>
                                    <input type="checkbox" name='materials' id="thanks" value="thanks" />
                                    <label for="thanks">Thanks</label>
                                    <input type="checkbox" name='materials' id="graduation" value="graduation" />
                                    <label for="graduation">Graduation</label>
                                    <input type="checkbox" name='materials' id="baby" value="baby" />
                                    <label for="baby">New Baby</label>
                                    <input type="checkbox" name='materials' id="birthday" value="birthday" />
                                    <label for="birthday">Birthday</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newproduct