import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className=' min-h-screen '>
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
