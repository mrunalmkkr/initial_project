import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authcontext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <div className="font-bold text-xl">CreatorApp</div>
      <div className="flex items-center gap-4">
        {user && (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/feed" className="hover:underline">Feed</Link>
            <Link to="/saved" className="hover:underline">Saved</Link>
            {user.role === 'admin' && (
              <>
                <Link to="/admin" className="hover:underline">Admin</Link>
                <Link to="/admin/reports" className="hover:underline">Reports</Link>
              </>
            )}
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
