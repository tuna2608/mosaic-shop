import React from 'react'
import "./newUser.scss"
import AdminNavBar from '../../../components/admin/adminNavbar/AdminNavBar'
import AdminLeftBar from '../../../components/admin/adminLeftBar/AdminLeftBar'
function NewUser() {
    return (
        <div className='new-user-container'>
            <AdminNavBar />
            <div className='new-user-bottom'>
                <AdminLeftBar />
                <div className='bottom-right'>
                    <h1 className="new-user-title">New User</h1>
                    <form className="new-user-form">
                        <div className="new-user-left">
                            <div className="new-user-item">
                                <label>Username</label>
                                <input type="text" placeholder='dinhhieu2k2' />
                            </div>
                            <div className="new-user-item">
                                <label>Email</label>
                                <input type="text" placeholder='user@gmail.com' />
                            </div>
                            <div className="new-user-item">
                                <label>Phone</label>
                                <input type="text" placeholder='+84 702 662 252' />
                            </div>
                            <div className="new-user-item">
                                <label>Gender</label>
                                <div className="new-user-gender">
                                    <input type="radio" name='gender' id="male" value="male" />
                                    <label for="male">Male</label>
                                    <input type="radio" name='gender' id="female" value="female" />
                                    <label for="female">Female</label>
                                    <input type="radio" name='gender' id="other" value="other" />
                                    <label for="other">Other</label>
                                </div>
                            </div>
                            <button className="create-btn">Create</button>
                        </div>
                        <div className="new-user-right">
                            <div className="new-user-item">
                                <label>Birthday</label>
                                <input type="text" placeholder='1 Oct 2002' />
                            </div>
                            <div className="new-user-item">
                                <label>Password</label>
                                <input type="text" placeholder='********' />
                            </div>
                            <div className="new-user-item">
                                <label>Address</label>
                                <input type="text" placeholder='Dien Bien Phu | Da Nang' />
                            </div>
                            <div className="new-user-item">
                                <label>Active</label>
                                <select name="active" id="active">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewUser