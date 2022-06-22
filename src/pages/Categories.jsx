import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [createdCategory, setCreatedCategory] = useState({});
  const [name, setName] = useState('');

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
  }, [createdCategory]);

  async function handleAddCategory() {
    try {
      const { data } = await axios.post('/categories', {
        parentId: category,
        name,
      });
      console.log('Category => ', data);
      setCreatedCategory(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div>
        {categories.map(category => (
          <ul>
            <li>{'->' + category.name}</li>
            {category.subCategories.map(sub => (
              <li>{sub.name}</li>
            ))}
          </ul>
        ))}
      </div>
      <hr />
      <hr />

      <div className="mt-10 bg-white">
        <h2>Add category</h2>
        <select onChange={e => setCategory(e.target.value)}>
          <option>Select Category</option>
          {categories.map(category => (
            <option value={category._id}>{category.name}</option>
          ))}
        </select>
        <br />
        <input
          onChange={e => setName(e.target.value)}
          className="px-3 bg-white"
          type="text"
          placeholder="category name"
          required
        />
        <br />
        <button
          className="px-3 py-2 bg-purple-200 text-purple-600 m-5"
          onClick={handleAddCategory}
        >
          Add category
        </button>
      </div>
    </>
  );
}

export default Categories;
