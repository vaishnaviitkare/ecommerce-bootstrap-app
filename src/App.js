import React, { useState,useContext } from 'react';
import Header from './components/Header';
import CardBody from './components/CardBody';
import Store from './components/Store';
import Footer from './components/Footer';
import CartForm from './components/CartForm';
import { ModalCon } from './Context/ModalContext';
/*
React Bootstrap configuration
*/
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  const {val}=useContext(ModalCon);
  return (
    <div>
      <Header/>
      <CardBody/>
      <Store/>
      <Footer/>
      {val && <CartForm/>}
    </div>
  );
}

export default App;
