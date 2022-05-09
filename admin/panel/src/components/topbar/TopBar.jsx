import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings } from '@mui/icons-material';
function TopBar() {
  return (
    <div className="topbar">
        <div className="topbar-wrapper">
            <div className="topbar-left">
                <div className="topbar-logo">System Admin</div>
            </div>
            <div className="topbar-right">
                <div className="topbar-icons-container">
                    <NotificationsNone/>
                    <span className="topbar-icons-badge">3</span>
                </div>
                <div className="topbar-icons-container">
                    <Language/>
                    <span className="topbar-icons-badge">3</span>
                </div>
                <div className="topbar-icons-container">
                    <Settings/>
                </div>
                <img src="images/admin.jpg" alt="" className="topbar-avatar" />
            </div>
        </div>
    </div>
  )
}

export default TopBar

