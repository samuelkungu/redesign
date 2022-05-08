import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"

function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item"><LineStyle/>Home</li>
                    <li className="sidebar-list-item"><Timeline/>Analytics</li>
                    <li className="sidebar-list-item"><TrendingUp/>Sales</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default SideBar