import { Visibility } from '@mui/icons-material'
import React from 'react'
import "./widgetSm.css"

function WidgetSm() {
  return (
    <div className='widget-sm'>
        <span className="widget-sm-title">New Members</span>
            <ul className="widget-sm-list">

                <li className="widget-sm-item">
                    <img src="images/admin.jpg" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user">
                            <div className="widget-sm-username">Sam</div>
                            <div className="widget-sm-usertitle">Software Developer</div>
                    </div>
                    <button className="widget-sm-btn"> <Visibility className='widget-sm-icon'/> Display </button>
                </li>

                <li className="widget-sm-item">
                    <img src="images/admin.jpg" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user">
                            <div className="widget-sm-username">Sam</div>
                            <div className="widget-sm-usertitle">Software Developer</div>
                    </div>
                    <button className="widget-sm-btn"> <Visibility className='widget-sm-icon'/> Display </button>
                </li>

                <li className="widget-sm-item">
                    <img src="images/admin.jpg" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user">
                            <div className="widget-sm-username">Sam</div>
                            <div className="widget-sm-usertitle">Software Developer</div>
                    </div>
                    <button className="widget-sm-btn"> <Visibility className='widget-sm-icon'/> Display </button>
                </li>

                <li className="widget-sm-item">
                    <img src="images/admin.jpg" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user">
                            <div className="widget-sm-username">Sam</div>
                            <div className="widget-sm-usertitle">Software Developer</div>
                    </div>
                    <button className="widget-sm-btn"> <Visibility className='widget-sm-icon'/> Display </button>
                </li>

            </ul>
    </div>
  )
}

export default WidgetSm