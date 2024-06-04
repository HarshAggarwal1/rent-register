import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import ProfilePage from './pages/ProfilePage';

function App() {
  const { profilePage } = useSelector((state) => state.profilePage);
  return (
    <div className=' min-h-screen '>
      <NavBar />
      {renderPage(profilePage)}
    </div>
  );
}

export default App;

function renderPage(page) {
  switch(page) {
      case false:
          return <Dashboard />;
      case true:
          return <ProfilePage />;
      default:
          return <Dashboard />;
  }
}