import { createContext, useState } from 'react';

export const Auth = createContext();

function AuthProvider({ children }) {
  const userInfo = JSON.parse(localStorage.getItem('user'));

  const [user, setUser] = useState(userInfo ? { ...userInfo } : {});

  return <Auth.Provider value={[user, setUser]}>{children}</Auth.Provider>;
}

export default AuthProvider;
