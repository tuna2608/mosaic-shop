import React from 'react'
import "./newMembers.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
function NewMembers() {
  return (
    <div className='new-members-container'>
      <h3>New Join Members</h3>
      <div className='member-card'>
        <img src="images/admin/avatar.jpg" alt="" />
        <div className='member-info'>
          <p className='member-name'>Đình Hiệu</p>
          <p className='member-title'>Software Developer</p>
        </div>
        <div className='display-btn'><VisibilityIcon /> Display</div>
      </div>
      <div className='member-card'>
        <img src="images/admin/avatar.jpg" alt="" />
        <div className='member-info'>
          <p className='member-name'>Đình Hiệu</p>
          <p className='member-title'>Software Developer</p>
        </div>
        <div className='display-btn'><VisibilityIcon /> Display</div>
      </div>
      <div className='member-card'>
        <img src="images/admin/avatar.jpg" alt="" />
        <div className='member-info'>
          <p className='member-name'>Đình Hiệu</p>
          <p className='member-title'>Software Developer</p>
        </div>
        <div className='display-btn'><VisibilityIcon /> Display</div>
      </div>
      <div className='member-card'>
        <img src="images/admin/avatar.jpg" alt="" />
        <div className='member-info'>
          <p className='member-name'>Đình Hiệu</p>
          <p className='member-title'>Software Developer</p>
        </div>
        <div className='display-btn'><VisibilityIcon /> Display</div>
      </div>
      <div className='member-card'>
        <img src="images/admin/avatar.jpg" alt="" />
        <div className='member-info'>
          <p className='member-name'>Đình Hiệu</p>
          <p className='member-title'>Software Developer</p>
        </div>
        <div className='display-btn'><VisibilityIcon /> Display</div>
      </div>
    </div>
  )
}

export default NewMembers