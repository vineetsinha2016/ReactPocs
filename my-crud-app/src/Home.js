import React from 'react';
import './App.css';
import logo from './logo.svg';

import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Container fluid>
        <Button color="link"><Link to="/items">Manage Items</Link></Button>
      </Container>
      </header>
      
    </div>
  );
}

export default Home;