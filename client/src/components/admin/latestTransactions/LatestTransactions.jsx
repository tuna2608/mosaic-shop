import React, { useEffect, useState } from 'react'
import "./latestTransactions.scss"
import { userRequest } from '../../../utilities/requestMethod'
import { format } from "timeago.js"
function LatestTransactions() {

  const Button = ({ type }) => {
    return <button className={'status ' + type}>{type}</button>
  }

  const [orders, setOrders] = useState([])


  // get orders
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders")
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
  }, [])


  return (
    <div className='latest-transactions-container'>
      <h3>Latest transactions</h3>
      <table>
        <tr className='rows'>
          <th>Customer ID</th>
          <th>Created Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {orders.map(order => (
          <tr key={order._id}>
            <td className='first-td'>
              <h5 style={{ paddingTop: "6px" }}>#{order.userId}</h5>
            </td>
            <td>{format(order.createdAt)}</td>
            <td>{order.amount}</td>
            <td><Button type={order.status} /> </td>
          </tr>
        ))}

      </table>
    </div>
  )
}

export default LatestTransactions