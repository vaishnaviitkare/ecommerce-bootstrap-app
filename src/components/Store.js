import React from "react";
import "./Store.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
const Store = () => {
  const productsArr = [

{
id:1,
title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{
id:2,
title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{
id:3,
title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{
id:4,
title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">MUSIC</h2>

      <Row className="products-row">
        {productsArr.map((product) => (
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