import React, { useEffect, useState } from 'react';
import API from './api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserCredits, setSelectedUserCredits] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.get('/users'); // Only Admins can hit this route
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleCreditChange = (userId, credits) => {
    setSelectedUserCredits(prev => ({ ...prev, [userId]: credits }));
  };

  const updateCredits = async (userId) => {
    const credits = selectedUserCredits[userId];
    await API.put(`/users/${userId}/credits`, { credits });
    alert(`Updated credits for user ID: ${userId}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      {users.map(user => (
        <div key={user._id} className="border-b py-2 flex justify-between items-center">
          <div>
            <p><strong>{user.username}</strong> ({user.email})</p>
            <p>Current Credits: {user.credits}</p>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              className="border px-2"
              placeholder="New credits"
              value={selectedUserCredits[user._id] || ''}
              onChange={(e) => handleCreditChange(user._id, e.target.value)}
            />
            <button
              onClick={() => updateCredits(user._id)}
              className="bg-blue-500 text-white px-3 py-1"
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
