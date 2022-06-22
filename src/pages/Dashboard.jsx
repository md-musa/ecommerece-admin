import React, { useEffect, useState } from 'react';
import { FcSalesPerformance } from 'react-icons/fc';
import { FiUsers } from 'react-icons/fi';
import { CgShoppingBag } from 'react-icons/cg';
import Graph from '../components/Graph';
import axios from 'axios';

function Dashboard() {
  const [total, setTotal] = useState('');
  const [users, setUsers] = useState('');
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    async function getTotal() {
      const { data } = await axios.get('/orders/totalSalesAndOrders');
      console.log('TOTAL=>', data);
      setTotal(data);
    }
    async function getUsers() {
      const { data } = await axios.get('/users');
      console.log('USER=>', data);
      setUsers(data.length);
    }
    async function getBestSellingProducts() {
      const { data } = await axios.get('/products/bestSellingProducts');
      console.log(data);
      setBestSellingProducts(data);
    }
    getTotal();
    getUsers();
    getBestSellingProducts();
  }, []);

  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-3 space-x-5">
        <div className="h-32 bg-white border rounded-md px-4 py-3">
          <div className="flex items-center justify-between pb-1">
            <FcSalesPerformance className="w-10 h-10" />
            <p className="p-1 rounded-md bg-green-100 text-green-400 text-md">
              +24%
            </p>
          </div>
          <p className="font-semibold text-2xl">${total.totalSales}</p>
          <p className="text-xl text-blue-900">Total sales</p>
        </div>

        <div className="h-32 bg-white border rounded-md px-4 py-3">
          <div className="flex items-center justify-between pb-1">
            <FiUsers className="w-10 h-10" />
            <p className="p-1 rounded-md bg-green-100 text-green-400 text-md">
              +24%
            </p>
          </div>
          <p className="font-semibold text-2xl">{users}</p>
          <p className="text-xl text-blue-900">Total Customer</p>
        </div>

        <div className="h-32 bg-white border rounded-md px-4 py-3">
          <div className="flex items-center justify-between pb-1">
            <CgShoppingBag className="w-10 h-10" />
            <p className="p-1 rounded-md bg-green-100 text-green-400 text-md">
              +24%
            </p>
          </div>
          <p className="font-semibold text-2xl">{total.totalOrders}</p>
          <p className="text-xl text-blue-900">Total Orders</p>
        </div>
      </div>

      <div className="w-[620px] bg-white p-10 my-5 rounded-xl">
        <Graph />
      </div>

      {/* Popular product's table*/}
      <div className="w-[620px] p-5 my-5 rounded-xl bg-white">
        <h3 className="font-semibold text-xl text-blue-900 ">Top Products</h3>
        <table border="true" className="w-full">
          <tr className="border-b h-10 text-md text-gray-500">
            <td>Photos</td>
            <td>Name</td>
            <td>Category</td>
            <td>Sold</td>
            <td>Total Sales</td>
          </tr>

          {bestSellingProducts.map(product => (
            <tr className="border-b h-16 bg-white hover:bg-gray-100 text-lg">
              <td>
                <img
                  className="w-[80px]"
                  src={product.images[0]}
                  alt=""
                  secSet=""
                />
              </td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.sold}</td>
              <td>${product.price * product.sold}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
