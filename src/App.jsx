import axios from 'axios';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Auth } from './contexts/auth';
import AddNewProduct from './pages/AddNewProduct';
import Categories from './pages/Categories';
import Customers from './pages/Customers';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import Order from './pages/Order';
import Orders from './pages/Orders';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Transactions from './pages/Transactions';

// const baseURL = 'https://ecommerce50.herokuapp.com/api';
const baseURL = 'http://localhost:5000/api';
const userInfo = JSON.parse(localStorage.getItem('user')) || null;
axios.defaults.baseURL = baseURL;
if (userInfo?.token)
  axios.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;

console.log(userInfo?.token);

function App() {
  const [user] = useContext(Auth);
  return (
    <>
      {!user.token ? (
        <LogIn />
      ) : (
        <div className="grid grid-cols-[1fr_4fr]">
          <Sidebar />
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<Order />} />

              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/addNewProduct" element={<AddNewProduct />} />

              <Route path="/customers" element={<Customers />} />

              <Route path="/transactions" element={<Transactions />} />

              <Route path="/categories" element={<Categories />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
