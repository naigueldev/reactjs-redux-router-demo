import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar isLoggedIn={false} />
          <Routes />
      </div>
    </Router>
  );
}

export default App;
