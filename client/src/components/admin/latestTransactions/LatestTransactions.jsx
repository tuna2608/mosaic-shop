import React from 'react'
import "./latestTransactions.scss"
function LatestTransactions() {

  const Button = ({ type }) => {
    return <button className={'status ' + type}>{type}</button>
  }

  return (
    <div className='latest-transactions-container'>
      <h3>Latest transactions</h3>
      <table>
        <tr className='rows'>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td className='first-td'>
            <img src="images/admin/avatar.jpg" alt="" />
            <h5 >Đình Hiệu</h5>
          </td>
          <td>2 Jun 2021</td>
          <td>120.000</td>
          <td><Button type="Approved" /> </td>

        </tr>
        <tr>
          <td className='first-td'>
            <img src="images/admin/avatar.jpg" alt="" />
            <h5 >Đình Hiệu</h5>
          </td>
          <td>2 Jun 2021</td>
          <td>120.000</td>
          <td><Button type="Declined" /> </td>

        </tr>
        <tr>
          <td className='first-td'>
            <img src="images/admin/avatar.jpg" alt="" />
            <h5 >Đình Hiệu</h5>
          </td>
          <td>2 Jun 2021</td>
          <td>120.000</td>
          <td><Button type="Pending" /> </td>

        </tr>
        <tr>
          <td className='first-td'>
            <img src="images/admin/avatar.jpg" alt="" />
            <h5 >Đình Hiệu</h5>
          </td>
          <td>2 Jun 2021</td>
          <td>120.000</td>
          <td><Button type="Approved" /> </td>

        </tr>
        <tr>
          <td className='first-td'>
            <img src="images/admin/avatar.jpg" alt="" />
            <h5 >Đình Hiệu</h5>
          </td>
          <td>2 Jun 2021</td>
          <td>120.000</td>
          <td><Button type="Approved" /> </td>
        </tr>
      </table>
    </div>
  )
}

export default LatestTransactions