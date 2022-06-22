import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BiFoodMenu } from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { VscListTree } from 'react-icons/vsc';
import { IoIosAdd } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="bg-white border h-[100vh]">
      <img
        className="object-contain w-28 mx-auto py-3"
        src="https://nwafoundation.org/wp-content/uploads/2017/04/FedEx-Logo-PNG-Transparent.png"
        alt=""
        secSet=""
      />

      <div
        onClick={() => navigate('/')}
        className="flex items-center text-semibold cursor-pointer text-xl px-5 py-3 hover:rounded-r-full hover:bg-gray-200"
      >
        <MdSpaceDashboard /> <p className="mx-2">Dashboard</p>
      </div>

      <div
        onClick={() => navigate('/orders')}
        className="flex items-center text-semibold cursor-pointer text-xl px-5 py-3 hover:rounded-r-full hover:bg-gray-200"
      >
        <AiFillShopping /> <p className="mx-2">Orders</p>
      </div>

      <div
        onClick={() => navigate('/customers')}
        className="flex items-center text-semibold cursor-pointer text-xl px-5 py-3 hover:rounded-r-full hover:bg-gray-200"
      >
        <FaUsers /> <p className="mx-2">Customers</p>
      </div>

      <div
        onClick={() => navigate('/products')}
        className="flex items-center text-semibold cursor-pointer text-xl px-5 py-3 hover:rounded-r-full hover:bg-gray-200"
      >
        <BiFoodMenu /> <p className="mx-2">Products</p>
      </div>

      <div
        onClick={() => navigate('/addNewProduct')}
        className="flex items-center text-semibold cursor-pointer text-xl px-5 py-3 hover:rounded-r-full hover:bg-gray-200"
      >
        <IoIosAdd /> <p className="mx-2">Add new Product</p>
      </div>

      <div
        onClick={() => navigate('/transaction')}
        className="flex items-center text-semibold cursor-pointer text-xl px-5 py-3 hover:rounded-r-full hover:bg-gray-200"
      >
        <AiOutlineTransaction /> <p className="mx-2">Transactions</p>
      </div>

      <div
        onClick={() => navigate('/categories')}
        className="flex items-center text-semibold cursor-pointer text-xl px-5 py-3 hover:rounded-r-full hover:bg-gray-200"
      >
        <VscListTree /> <p className="mx-2">Categories</p>
      </div>
    </div>
  );
}

export default Sidebar;
