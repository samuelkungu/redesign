import React from 'react'
import "./widgetLg.css"

function WidgetLg() {

  const Button =({ type })=> {
    return <button className={'widget-lg-btn ' + type }>{type}</button>
  };

  return (
    <div className="widget-lg">
       <h3 className="widget-lg-title">Latest Transactions</h3>
       <table className="widget-lg-table">
            <tr className="widget-lg-tr">
                  <th className="widget-lg-th">Customer</th>
                  <th className="widget-lg-th">Date</th>
                  <th className="widget-lg-th">Amount</th>
                  <th className="widget-lg-th">Status</th>
            </tr>

            <tr>
              <td className='widget-lg-user'>
                 <img src="images/admin.jpg" alt="" className="widget-lg-img" />
                 <span className="widget-lg-name">Sam Sung</span>
              </td>
              <td className="widget-lg-date">2 Jun 2021</td>
              <td className="widget-lg-amount">$2,000</td>
              <td className="widget-lg-status"><Button type="Approved" /></td>
            </tr>

            <tr>
              <td className='widget-lg-user'>
                 <img src="images/admin.jpg" alt="" className="widget-lg-img" />
                 <span className="widget-lg-name">Sam Sung</span>
              </td>
              <td className="widget-lg-date">2 Jun 2021</td>
              <td className="widget-lg-amount">$2,000</td>
              <td className="widget-lg-status"><Button type="Declined" /></td>
            </tr>

            <tr>
              <td className='widget-lg-user'>
                 <img src="images/admin.jpg" alt="" className="widget-lg-img" />
                 <span className="widget-lg-name">Sam Sung</span>
              </td>
              <td className="widget-lg-date">2 Jun 2021</td>
              <td className="widget-lg-amount">$2,000</td>
              <td className="widget-lg-status"><Button type="Pending" /></td>
            </tr>

       </table>

    </div>
  )
}

export default WidgetLg