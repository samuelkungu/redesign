import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css"

function User() {
  return (
    <div className='user'>
        <div className="user-title-container">
            <h1 className="user-title">Edit User</h1>
            <Link to={"/newUser"}>
            <button className="user-add-btn">Create</button>
            </Link>
            
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
                <span className="update-title">Edit</span>
                <form className="user-update-form">
                    <div className="update-left">
                        <div className="update-item">
                            <label>Username</label> <input  type="text"  placeholder='username'  className="update-input" />
                        </div>
                        <div className="update-item">
                            <label>Full name</label> <input  type="text"  placeholder='fullname'  className="update-input" />
                        </div>
                        <div className="update-item">
                            <label>Email</label> <input  type="text"  placeholder='email'  className="update-input" />
                        </div>
                        <div className="update-item">
                            <label>Number</label> <input  type="text"  placeholder='number'  className="update-input" />
                        </div>
                        <div className="update-item">
                            <label>Address</label> <input  type="text"  placeholder='address'  className="update-input" />
                        </div>
                    </div>
                    <div className="update-right">
                        <div className="update-upload">
                            <img src="images/admin.jpg" alt="" className="update-img" />
                            <label htmlFor="file"><Publish className='update-icon'/></label>
                            <input type="file" id='file' style={{display : "none" }} />
                        </div>
                        <button className="update-btn">Update</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default User