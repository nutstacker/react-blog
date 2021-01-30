import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Routes from './components/routes/Routes';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <div className="container">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Help</Link>
      </div>
      <Routes isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
    </div>
  );
}

export default App;
