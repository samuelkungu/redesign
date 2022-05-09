import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material'
import React from 'react'
import "./featuredInfo.css"


function Featuredinfo() {
  return (
    <div className='featured'>
        <div className="featured-item">
            <span className="featured-title">Revenue</span>
                <div className="money-box">
                    <span className="money">$2,000</span>
                    <span className="rate">-11.4  <ArrowDownwardOutlined className='arrow-icon negative'/> </span>
                </div>
            <span className="featured-sub">Compared to last month</span>
        </div>

        <div className="featured-item">
            <span className="featured-title">Revenue</span>
                <div className="money-box">
                    <span className="money">$157</span>
                    <span className="rate">-4.8  <ArrowDownwardOutlined className='arrow-icon negative'/> </span>
                </div>
            <span className="featured-sub">Compared to last month</span>
        </div>

        <div className="featured-item">
            <span className="featured-title">Costs</span>
                <div className="money-box">
                    <span className="money">$247</span>
                    <span className="rate">+0.7 <ArrowUpwardOutlined className='arrow-icon'/> </span>
                </div>
            <span className="featured-sub">Compared to last month</span>
        </div>

    
    </div>
  )
}

export default Featuredinfo
 