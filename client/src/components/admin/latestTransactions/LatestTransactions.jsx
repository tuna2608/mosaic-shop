import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./latestTransactions.scss";
import { userRequest } from "../../../utilities/requestMethod";
import { format } from "timeago.js";
import { updateOrderStatus } from "../../../redux/apiCalls";
function LatestTransactions() {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const handleUpdateOrderStatus = (orderId, type) => {
    type = type === "Accept" ? "Delivering" : "Cancelled";
    updateOrderStatus(dispatch, orderId, type);
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: type } : order
      )
    );
  };
  const Button = ({ orderId, type }) => {
    return (
      <button
        onClick={() => handleUpdateOrderStatus(orderId, type)}
        style={{ cursor: "pointer" }}
        className={"status " + type}
      >
        {type}
      </button>
    );
  };

  // get orders
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <div className="latest-transactions-container">
      <h3>Latest transactions</h3>
      <table>
        <tr className="rows">
          <th>Customer ID</th>
          <th>Created Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {orders.map((order) => (
          <tr key={order._id}>
            <td className="first-td">
              <h5 style={{ paddingTop: "6px" }}>#{order.userId}</h5>
            </td>
            <td>{format(order.createdAt)}</td>
            <td>{order.amount}</td>
            <td>
              {order.status === "Pending" ? (
                <>
                  <Button orderId={order._id} type={"Accept"} />
                  <Button orderId={order._id} type={"Cancel"} />
                </>
              ) : (
                <Button orderId={order._id} type={order.status} />
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default LatestTransactions;
