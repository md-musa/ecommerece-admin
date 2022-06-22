import React, { useContext } from 'react';
import { RiNotification4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Auth } from '../contexts/auth';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar() {
  const [user, setUser] = useContext(Auth);
  return (
    <nav className="flex items-center justify-end bg-white h-14 space-x-3 px-10 shadow-sm">
      <RiNotification4Line className="h-7 w-7 hover:text-purple-500 cursor-pointer text-purple-400" />

      {!user.token ? (
        <Link to="/login">
          <button className="px-6 hover:bg-purple-300 py-1 rounded-md font-semibold bg-purple-200 text-purple-600 text-md">
            Login
          </button>
        </Link>
      ) : (
        <div className="flex items-center rounded-sm px-3 py-1 space-x-2 bg-purple-100 text-purple-500">
          <AiOutlineUser className="h-6 w-6" /> <p>{user.name}</p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
