import React, {useContext} from "react";
import './Header.css';
import { ModalCon } from "../Context/ModalContext";
import { Navbar, Nav, Container, Button} from "react-bootstrap";
import { DataCon } from "../Context/DataContext";
const Header=(props)=>{
const {openModal}=useContext(ModalCon);                                                           
const {data}=useContext(DataCon);
   return(
    <div className="div1">
    <Navbar className="navb" bg="dark" variant="dark" expand="md" fixed="top"> 
      <Container fluid className="px-2">
        
        {/* Center Menu */}
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="px-5 text-uppercase header-font">
            Home
          </Nav.Link>
          <Nav.Link href="#store" className="px-5 text-uppercase header-font">
            Store
          </Nav.Link>
          <Nav.Link href="#about" className="px-5 text-uppercase header-font">
            About
          </Nav.Link>
        </Nav>

        {/* Cart Button Right */}
        <Button
          variant="outline-info"
          className="position-absolute end-0 me-4"
          onClick={openModal}
        >
          cart 
        </Button>
        <span className="cart-button">{data.length}</span>
      </Container>
    </Navbar>
  </div>
   )
}
export default Header;