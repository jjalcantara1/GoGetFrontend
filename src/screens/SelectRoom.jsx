import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product"; // Adjust the relative path as needed
import "../SelectRoom.css";

function SelectRoom() {
  return (
    <header>
      <div>
        <h1 className="title">Available Rooms</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </header>
  );
}

export default SelectRoom;
