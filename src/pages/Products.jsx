import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { GrView } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get('/products');
      console.log(data);
      setProducts(data.products);
    }
    getProducts();
  }, []);
  return (
    <div className="p-5 rounded-xl bg-white">
      <h3 className="font-semibold text-xl text-blue-900 ">Products</h3>
      <table border="true" className="w-full">
        <tr className="border-b h-10 text-md text-gray-500">
          <td>Photos</td>
          <td>Title</td>
          <td>Category</td>
          <td>Price</td>
          <td>Stock</td>
          <td>View</td>
        </tr>

        {products.map(product => (
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
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>
              <Link to="/product/edit">
                <button className="px-4 rounded-md shadow-sm border py-1 bg-purple-100 text-purple-500">
                  Edit
                </button>
              </Link>
            </td>
            <td>
              <Link to={`/products/${product._id}`}>
                <GrView />
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Products;
