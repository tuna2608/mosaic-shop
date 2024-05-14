import React from 'react'
import "./detailuser.scss"
import AdminNavBar from '../../../components/admin/adminNavbar/AdminNavBar'
import AdminLeftBar from '../../../components/admin/adminLeftBar/AdminLeftBar'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PublishIcon from '@mui/icons-material/Publish';
import { NavLink } from 'react-router-dom';
function DetailUser() {
    return (
        <div className='detail-user-container'>
            <AdminNavBar />
            <div className='detail-user-bottom'>
                <AdminLeftBar />
                <div className='bottom-right'>
                    <div className="user-title-container">
                        <h1 className='user-title'>Edit User</h1>
                        <NavLink to="/newUser">
                            <button className="user-add-btn">Create</button>
                        </NavLink>
                    </div>
                    <div className="user-container">
                        <div className="user-show">
                            <div className="user-show-top">
                                <img src="/images/admin/avatar.jpg" alt="" className="user-show-img" />
                                <div className="user-show-title">
                                    <span className="user-show-username">Willson</span>
                                    <span className="user-show-usertitle">Software Engineer</span>
                                </div>
                            </div>
                            <div className="user-show-bottom">
                                <span className="account-details-title">Account Details</span>
                                <div className="account-details">
                                    <span className="detail"><PersonOutlineIcon />dinhhieu2k2</span>
                                    <span className="detail"><DateRangeIcon />1 Oct 2002</span>
                                </div>
                                <span className="account-details-title">Contact details</span>
                                <div className="account-details">
                                    <span className="detail"><PhoneIcon />+84 702 662 252</span>
                                    <span className="detail"><EmailIcon />trandinhhieu11002@gmail.com</span>
                                    <span className="detail"><BusinessIcon />Dien Bien Phu, Da Nang</span>
                                </div>
                            </div>

                        </div>
                        <div className="user-update">
                            <div className="user-update-title">Edit</div>
                            <form className="user-update-form">
                                <div className="user-update-left">
                                    <div className="user-update-item">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            placeholder='dinhhieu2k2'
                                            className='user-update-input'
                                        />
                                        <div className="user-update-item">
                                            <label>Birthday</label>
                                            <input
                                                type="text"
                                                placeholder='1 Oct 2002'
                                                className='user-update-input'
                                            />
                                        </div>
                                    </div>
                                    <div className="user-update-item">
                                        <label>Phone number</label>
                                        <input
                                            type="text"
                                            placeholder='+84 702 662 252'
                                            className='user-update-input'
                                        />
                                    </div>
                                    <div className="user-update-item">
                                        <label>email</label>
                                        <input
                                            type="text"
                                            placeholder='user@gmail.com'
                                            className='user-update-input'
                                        />
                                    </div>
                                    <div className="user-update-item">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            placeholder='Dien Bien Phu, Da Nang'
                                            className='user-update-input'
                                        />
                                    </div>
                                </div>
                                <div className="user-update-right">
                                    <div className="user-update-upload">
                                        <img src="/images/admin/avatar.jpg" className="user-update-img" alt="" />
                                        <label htmlFor="file">
                                            <PublishIcon style={{ cursor: "pointer" }} />
                                        </label>
                                        <input
                                            type="file"
                                            id="file"
                                            style={{ display: "none" }} />
                                    </div>
                                    <button className="user-update-btn">Update</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailUser