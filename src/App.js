import React from 'react';
import Header from './components/Header';
import CardBody from './components/CardBody';
/*
React Bootstrap configuration
*/
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
function App() {
  return (
    <div>
      <Header/>
      <CardBody/>
    </div>
  );
}

export default App;
