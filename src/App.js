import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Application from './pages/ApplicationPage';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Admin from './components/Admin';
import UserInfo from './components/UserInfo';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute roles={['admin']}>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute roles={['user', 'admin']}>
                <UserInfo />
              </PrivateRoute>
            }
          />
          <Route
            path="/applications"
            element={
              <PrivateRoute roles={['user', 'admin']}>
                <Application />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
