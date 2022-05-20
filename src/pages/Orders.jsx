import React from 'react';
import Sidebar from '../components/Sidebar';

function Orders() {
  return (
    <div className="px-10 py-5 bg-white">
      <h3 className="font-semibold py-3 text-xl text-blue-900 ">
        Orders details
      </h3>

      <table border="true" className="w-full">
        <tr className="border-b h-10 text-md text-gray-500">
          <td>Order ID</td>
          <td>Customer</td>
          <td>Order</td>
          <td>Delivery Date</td>
          <td>Delivery Pricing</td>
          <td>Delivery Status</td>
        </tr>

        <tr className="border-b h-10 bg-white hover:bg-gray-100 text-lg">
          <td>434334</td>
          <td>Md. Musa</td>
          <td>Panjabi</td>
          <td>3th dec</td>
          <td>120$</td>
          <td>On Processing</td>
        </tr>
        <tr className="border-b h-10 bg-white hover:bg-gray-100 text-lg">
          <td>434334</td>
          <td>Md. Musa</td>
          <td>Panjabi</td>
          <td>3th dec</td>
          <td>120$</td>
          <td>On Processing</td>
        </tr>
      </table>
    </div>
  );
}

export default Orders;
