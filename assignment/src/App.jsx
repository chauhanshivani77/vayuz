import React from 'react';
import Sidebar from "./components/Sidebar";
import MainPage from './components/MainPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
     
      <div className="main-content">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
