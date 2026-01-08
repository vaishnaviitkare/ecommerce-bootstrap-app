import {Container,Row,Col } from "react-bootstrap";
const FooterHome=()=>{
 return (
    <footer style={{ backgroundColor: "#56CCF2" }} >
      <Container>
        <Row className="align-items-center py-4">
          
          {/* Left Side */}
          <Col md={6} className="text-white">
            <h2 style={{ fontWeight: "bold" }}>The Generics</h2>
          </Col>


        </Row>
      </Container>
    </footer>
  );
}
export default FooterHome;