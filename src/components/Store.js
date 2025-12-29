import React,{useContext} from "react";
import "./Store.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { DataCon } from "../Context/DataContext";
const Store = () => {
 const {data}=useContext(DataCon);
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">MUSIC</h2>

      <Row className="products-row">
        {data.map((product) => (
          <Col key={product.id} md={6} className="d-flex justify-content-center product-col">
            <Card style={{ width: "18rem" }} className="text-center border-0">
              <Card.Title className="mt-3">
                {product.title}
              </Card.Title>

              <Card.Img
                variant="top"
                style={{width:"90%"}}
                src={product.imageUrl}
                alt={product.title}
              />

              <Card.Body className="d-flex justify-content-between align-items-center">
                <span>${product.price}</span>
                <Button variant="info">ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;