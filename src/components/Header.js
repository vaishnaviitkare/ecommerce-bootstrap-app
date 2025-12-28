import React, {useContext} from "react";
import './Header.css';
import { ModalCon } from "../Context/ModalContext";
import { Navbar, Nav, Container, Button} from "react-bootstrap";
const Header=(props)=>{
const {openModal}=useContext(ModalCon);
   return(
    <div>
    <Navbar bg="dark" variant="dark" expand="md">
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
          cart <span className="ms-1">0</span>
        </Button>

      </Container>
    </Navbar>
    
    </div>
   )
}
export default Header;