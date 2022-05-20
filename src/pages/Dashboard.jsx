import React from 'react';
import Sidebar from '../components/Sidebar';
import { FcSalesPerformance } from 'react-icons/fc';
import { Doughnut } from 'react-chartjs-2';
import Graph from '../components/Graph';

function Dashboard() {
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
          <p className="font-semibold text-2xl">$30,000.00</p>
          <p className="text-xl text-blue-900">Total sales</p>
        </div>

        <div className="h-32 bg-white border rounded-md px-4 py-3">
          <div className="flex items-center justify-between pb-1">
            <FcSalesPerformance className="w-10 h-10" />
            <p className="p-1 rounded-md bg-green-100 text-green-400 text-md">
              +24%
            </p>
          </div>
          <p className="font-semibold text-2xl">$30,000.00</p>
          <p className="text-xl text-blue-900">Total sales</p>
        </div>

        <div className="h-32 bg-white border rounded-md px-4 py-3">
          <div className="flex items-center justify-between pb-1">
            <FcSalesPerformance className="w-10 h-10" />
            <p className="p-1 rounded-md bg-green-100 text-green-400 text-md">
              +24%
            </p>
          </div>
          <p className="font-semibold text-2xl">$30,000.00</p>
          <p className="text-xl text-blue-900">Total sales</p>
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
            <td>Date</td>
            <td>Price</td>
            <td>Total Sales</td>
          </tr>

          <tr className="border-b h-16 bg-white hover:bg-gray-100 text-lg">
            <td>
              <img
                className="w-[80px]"
                src="https://freepngimg.com/thumb/categories/627.png"
                alt=""
                srcset=""
              />
            </td>
            <td>Panjabi</td>
            <td>4 dec 2020</td>
            <td>38$</td>
            <td>389$</td>
          </tr>
          <tr className="border-b h-16 bg-white hover:bg-gray-100 text-lg">
            <td>
              <img
                className="w-[80px]"
                src="https://freepngimg.com/thumb/categories/627.png"
                alt=""
                srcset=""
              />
            </td>
            <td>Panjabi</td>
            <td>4 dec 2020</td>
            <td>38$</td>
            <td>389$</td>
          </tr>
          <tr className="border-b h-16 bg-white hover:bg-gray-100 text-lg">
            <td>
              <img
                className="w-[80px]"
                src="https://freepngimg.com/thumb/categories/627.png"
                alt=""
                srcset=""
              />
            </td>
            <td>Panjabi</td>
            <td>4 dec 2020</td>
            <td>38$</td>
            <td>389$</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
