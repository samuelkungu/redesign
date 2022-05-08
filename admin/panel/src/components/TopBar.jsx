import React from 'react'
import "./topbar.css"
import {NotificationsNone } from '@mui/icons-material';
function TopBar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <div className="logo">System Admin</div>
            </div>
            <div className="right">
                <div className="icons-container">
                    <NotificationsNone/>
                    <span className="icons-badge">3</span>
                    
                  </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar

