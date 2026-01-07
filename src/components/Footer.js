import React from "react";
import { CardFooter,Container,Row,Col } from "react-bootstrap";
import { FaYoutube,FaSpotify,FaFacebook } from "react-icons/fa";
const Footer=()=>{
 return (
    <footer style={{ backgroundColor: "#56CCF2" }} >
      <Container>
        <Row className="align-items-center py-4">
          
          {/* Left Side */}
          <Col md={6} className="text-white">
            <h2 style={{ fontWeight: "bold" }}>The Generics</h2>
          </Col>

          {/* Right Side */}
          <Col md={6} className="text-md-end text-center">
           <FaYoutube size={30} color="red" className="mx-3" />
           <FaSpotify size={30} color="white" className="mx-3" />
           <FaFacebook size={30} color="white" className="mx-3" />
          </Col>

        </Row>
      </Container>
    </footer>
  );
}
export default Footer;