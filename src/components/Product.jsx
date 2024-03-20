import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../SelectRoom.css";


function Product({ product }) {
  return (
    <div className="grid-container">
    <Card className="my-card custom card p-3 rounded">
        <Card.Img src={product.image} className="roomPic" />
      

      <Card.Body>
        <Link to={`product/${product.id}`} className="link-no-underline">
          <Card.Title className="card-title">
            <div className="TitleCard">{product.name}</div>
          </Card.Title>
        </Link>

        <Card.Text as="h3" className="price-of-room">
          ₱{product.price}/night
        </Card.Text>
          
      </Card.Body>
    </Card>
    </div>
  );
}

export default Product;
