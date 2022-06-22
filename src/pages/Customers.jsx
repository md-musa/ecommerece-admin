import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Auth } from '../contexts/auth';

function Customers() {
  const [user, setUser] = useContext(Auth);
  const loggedInUser = user;

  const [users, setUsers] = useState([]);
  const [promotedUser, setPromotedUser] = useState({});

  useEffect(() => {
    async function users() {
      const { data } = await axios.get('/users');
      console.log(data);
      setUsers(data);
    }
    users();
  }, [promotedUser]);

  const handleMakeAdmin = async id => {
    const { data } = await axios.patch('/users/makeAdmin', {
      userId: id,
    });
    setPromotedUser(data.user);
  };
  return (
    <div className="px-10 py-5 bg-white">
      <h3 className="font-semibold py-3 text-xl text-blue-900 ">Customers</h3>

      <table border="true" className="w-full">
        <tr className="border-b h-10 text-md text-gray-500">
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Role</td>
          <td>Make Admin</td>
        </tr>

        {users.map(user => (
          <tr className="border-b h-10 bg-white hover:bg-gray-100 text-lg">
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              {loggedInUser.role === 'superAdmin' &&
                user.role !== 'admin' &&
                user.role !== 'superAdmin' && (
                  <button
                    onClick={() => handleMakeAdmin(`${user._id}`)}
                    className="text-sm px-2 py-[3px]  text-semibold bg-purple-100 text-purple-500 rounded-sm"
                  >
                    Make Admin
                  </button>
                )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Customers;
