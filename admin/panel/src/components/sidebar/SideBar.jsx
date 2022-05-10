import { BarChart, ChatOutlined, DynamicFeedOutlined, LineStyle, MailOutline, MonetizationOnOutlined, Person, ReportGmailerrorredOutlined, RssFeedOutlined, Timeline, TrendingUp, WorkOutlineOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"

function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className="sidebar-list">
                    <Link to={"/"}  className="link" >
                    <li className="sidebar-list-item active "><LineStyle className='sidebar-icons'/>Home</li>
                    </Link>
                    
                    <li className="sidebar-list-item"><Timeline className='sidebar-icons'/>Analytics</li>
                    <li className="sidebar-list-item"><TrendingUp className='sidebar-icons'/>Sales</li>
                </ul>
            </div>

            <div className="sidebar-menu">
                <h3 className="sidebar-title">Quick Menu</h3>
                <ul className="sidebar-list">
                    <Link to={"/users"} className="link" >
                       <li className="sidebar-list-item "><Person className='sidebar-icons'/>Users</li> 
                    </Link>
                    <Link to={"/products"} className="link" >
                        <li className="sidebar-list-item"><RssFeedOutlined className='sidebar-icons'/>Products</li>
                    </Link>
                    
                    <li className="sidebar-list-item"><MonetizationOnOutlined className='sidebar-icons'/>Transactions</li>
                    <li className="sidebar-list-item"><BarChart className='sidebar-icons'/>Reports</li>
                </ul>
            </div>

            <div className="sidebar-menu">
                <h3 className="sidebar-title">Notifications</h3>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item "><MailOutline className='sidebar-icons'/>Mail</li>
                    <li className="sidebar-list-item"><DynamicFeedOutlined className='sidebar-icons'/>Feedback</li>
                    <li className="sidebar-list-item"><ChatOutlined className='sidebar-icons'/>Messages</li>
                </ul>
            </div>

            <div className="sidebar-menu">
                <h3 className="sidebar-title">Staff</h3>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item "><WorkOutlineOutlined className='sidebar-icons'/>Manage</li>
                    <li className="sidebar-list-item"><Timeline className='sidebar-icons'/>Analytics</li>
                    <li className="sidebar-list-item"><ReportGmailerrorredOutlined className='sidebar-icons'/>Report</li>
                </ul>
            </div>

        </div>
    </div>
    )
}

export default SideBar