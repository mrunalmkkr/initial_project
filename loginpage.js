import React, { createContext,useState, useContext } from 'react';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';


const AuthContext = createContext();
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth()
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await API.post('/auth/login', { email, password });
    login(res.data.token);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-2 p-2 border" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 border" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  );
};

export default LoginPage;
