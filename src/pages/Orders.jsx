import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { compareAsc, format } from 'date-fns';
import { Link } from 'react-router-dom';
import { GrView } from 'react-icons/gr';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function getOrders() {
      const { data } = await axios.get('/orders');
      setOrders(data.orders);
    }
    getOrders();
  }, [status]);

  async function updateStatus(e, _id) {
    try {
      const { data } = await axios.patch(`/orders/updateStatus/${_id}`, {
        status: e.target.value,
      });
      setStatus(data.order);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="px-10 py-5 bg-white">
      <h3 className="font-semibold py-3 text-xl text-blue-900 ">
        Orders details
      </h3>

      <table border="true" className="w-full">
        <tr className="border-b h-10 text-md text-gray-500">
          <td>Order ID</td>
          <td>Customer</td>
          <td>Ordered Items</td>
          <td>Delivery Date</td>
          <td>Delivery Pricing</td>
          <td>Delivery Status</td>
          <td>View</td>
        </tr>

        {orders.map(order => (
          <tr className="border-b h-10 bg-white hover:bg-gray-100 text-lg">
            <td>{'ID'}</td>
            <td>{'User'}</td>
            <td>{order.items.length}</td>
            <td>{format(new Date(order.date), 'dd-MM-yyyy')}</td>
            <td>${order.total}</td>
            <td>
              <select
                className={`${order.status} px-4 outline-none rounded-md border`}
                defaultValue={order.status}
                onChange={e => updateStatus(e, order._id)}
              >
                <option value="pending">Pending</option>
                <option value="delivered">delivered</option>
                <option value="cancelled">cancelled</option>
              </select>
            </td>
            <td>
              <Link to={`/orders/${order._id}`}>
                <GrView />
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Orders;
