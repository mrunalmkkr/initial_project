import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import Dashboard from './components/dashboard';
import Feed from './components/feed';
import { AuthProvider } from './context/authcontext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
