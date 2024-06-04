import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import ProfilePage from './pages/ProfilePage';

function App() {
  const { profilePage } = useSelector((state) => state.profilePage);
  console.log(profilePage);
  return (
    <div className=' min-h-screen '>
      <NavBar />
      {renderPage(profilePage.profilePage)}
    </div>
  );
}

export default App;

function renderPage(page) {
  console.log(page);
  switch(page) {
      case "dashboardPage":
          return <Dashboard />;
      case "profilePage":
          return <ProfilePage />;
      default:
          return <Dashboard />;
  }
}