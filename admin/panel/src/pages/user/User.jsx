import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material'
import React from 'react'
import "./user.css"

function User() {
  return (
    <div className='user'>
        <div className="user-title-container">
            <h1 className="user-title">Edit User</h1>
            <button className="user-add-btn">Create</button>
        </div>

        <div className="user-container">
            <div className="display">

                <div className="display-top">
                    <img src="images/admin.jpg" alt="" className="display-img" />
                    <div className="display-top-title">
                        <div className="display-username">Sam Sung</div>
                        <div className="display-desc">Web Developer</div>
                    </div>
                </div>
                
                <div className="display-bottom">
                    <span className="display-bottom-title">Account Details</span>
                    <div className="display-info">
                        <PermIdentity className='display-info-icon'/>
                        <span className="display-info-title">samsung2022</span>
                    </div>
                    <div className="display-info">
                        <CalendarToday className='display-info-icon'/>
                        <span className="display-info-title">10.12.1999</span>
                    </div>
                    <span className="display-bottom-title">Contact Details</span>
                    <div className="display-info">
                        <PhoneAndroid className='display-info-icon'/>
                        <span className="display-info-title">+254 712 345 678</span>
                    </div>
                    <div className="display-info">
                        <MailOutline className='display-info-icon'/>
                        <span className="display-info-title">samsung@gmail.com</span>
                    </div>
                    <div className="display-info">
                        <LocationSearching className='display-info-icon'/>
                        <span className="display-info-title">Nairobi</span>
                    </div>
                    
                </div>
            </div>
            
            <div className="user-update">
                update
            </div>

        </div>
    </div>
  )
}

export default User