import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className=' min-h-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
    2xl:max-w-screen-2xl'>
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
