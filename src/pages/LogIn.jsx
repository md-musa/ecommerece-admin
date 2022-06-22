import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Auth } from '../contexts/auth';
function LogIn() {
  const [user, setUser] = useContext(Auth);

  const [email, setEmail] = useState('mohammad.musa706@gmail.com');
  const [password, setPassword] = useState('123456l');
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data: userInfo } = await axios.post('/users/login', {
        email,
        password,
      });

      localStorage.setItem('user', JSON.stringify(userInfo));
      setUser(userInfo);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="grid h-screen sm:grid-cols-[1fr_2fr] bg-white">
      <div className="border hidden sm:flex items-center justify-center bg-cover bg-[url('https://images.unsplash.com/photo-1643622000342-65f9fdeb50d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')]">
        <div className="p-4 w-3/4 text-white card">
          <h2 className="text-2xl  font-bold">Enjoy Buying new Products</h2>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            dolorum?
          </small>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-4/5 sm:w-3/5 md:w-1/2">
          <h1 className="my-5 text-3xl">Log in your account</h1>

          <form onSubmit={handleSubmit}>
            <input
              className="com-input"
              type="text"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              required
            />
            <br />
            <input
              className="com-input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <br />
            <span
              style={error ? { display: 'inline' } : { display: 'none' }}
              className="text-lg text-red-400 pl-2"
            >
              {error}
            </span>

            <button className="btn-secondary bg-purple-200 text-purple-600">
              Log in
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
