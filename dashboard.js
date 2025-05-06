import React, {createContext, useEffect, useState, useContext } from 'react';
import API from './api.js';


const AuthContext = createContext();
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const fetchCredits = async () => {
      const res = await API.get(`/users/${user.id}/credits`);
      setCredits(res.data.credits);
    };
    fetchCredits();
  }, [user]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Welcome, {user.username}</h2>
      <p className="mt-2">Credit Points: <strong>{credits}</strong></p>
    </div>
  );
};

export default Dashboard;
