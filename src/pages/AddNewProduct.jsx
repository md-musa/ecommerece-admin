import axios from 'axios';
import { fi } from 'date-fns/locale';
import React, { useContext, useEffect, useState } from 'react';
import { Auth } from '../contexts/auth';

function AddNewProduct() {
  const [user, setUser] = useContext(Auth);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const submitForm = async e => {
    e.preventDefault();

    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    formData.append('title', title);
    formData.append('description', description);
    formData.append('stock', stock);
    formData.append('price', price);
    formData.append('brand', brand);
    formData.append('category', category);

    try {
      const { data } = await axios.post('/products', formData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await axios.get('/categories');
        console.log(data);
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCategories();
  }, []);

  const [subCategories, setSubCategories] = useState([]);
  function getSubCategories(parentCategoryId) {
    const _subCategories = categories.filter(
      category => category._id === parentCategoryId
    );
    console.log(_subCategories);
    setSubCategories(_subCategories[0].subCategories);
  }

  return (
    <div className="px-8 py-5">
      <form onSubmit={submitForm}>
        <p className="text-lg pt-2  text-gray-500">Product title</p>
        <input
          className="px-3 w-1/2 py-2 rounded-md outline-none border shadow-md"
          type="text"
          name=""
          id=""
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        {/* <p className="text-lg pt-2  text-gray-500">Category</p>
        <input
          className="px-3 w-1/2 py-2 rounded-md outline-none border shadow-md"
          type="text"
          name=""
          id=""
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        /> */}
        <select onChange={e => getSubCategories(e.target.value)}>
          <option>Select Category</option>
          {categories.map(category => (
            <option value={category._id}>{category.name}</option>
          ))}
        </select>
        <select onChange={e => setCategory(e.target.value)}>
          <option>Select Category</option>
          {subCategories.map(category => (
            <option value={category._id}>{category.name}</option>
          ))}
        </select>

        <p className="text-lg pt-2  text-gray-500">Brand</p>
        <input
          className="px-3 w-1/2 py-2 rounded-md outline-none border shadow-md"
          type="text"
          name=""
          id=""
          value={brand}
          onChange={e => setBrand(e.target.value)}
          required
        />
        <p className="text-lg pt-2  text-gray-500">stock</p>
        <input
          className="px-3 w-1/2 py-2 rounded-md outline-none border shadow-md"
          type="number"
          min={10}
          name=""
          id=""
          value={stock}
          onChange={e => setStock(e.target.value)}
          required
        />
        <p className="text-lg pt-2  text-gray-500">price</p>
        <input
          className="px-3 w-1/2 py-2 rounded-md outline-none border shadow-md"
          type="number"
          min={1}
          name=""
          id=""
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />

        <p className="text-lg pt-2  text-gray-500">description</p>
        <textarea
          id=""
          name=""
          rows="4"
          cols="70"
          maxlength="200"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        ></textarea>

        <p className="text-lg pt-2  text-gray-500">Image</p>
        <input
          type="file"
          name=""
          id=""
          multiple
          onChange={e => setImages(e.target.files)}
          required
        />
        <br />
        <button
          type="submit"
          className="bg-purple-200  hover:bg-purple-300  text-purple-500 shadow-sm w-1/2 py-1 mt-3"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
