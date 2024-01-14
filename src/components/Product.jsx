import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../SelectRoom.css";

function Product({ product }) {
  return (
    <Card className="my-card custom card p-3 rounded">
      <Link to={`product/${product._id}`}>
        <Card.Img src={product.image} className="roomPic" />
      </Link>

      <Card.Body>
        <Link to={`product/${product.id}`} className="link-no-underline">
          <Card.Title className="card-title">
            <div className="TitleCard">{product.name}</div>
          </Card.Title>
        </Link>

        <Card.Text as="h3" className="price-of-room">
          ₱{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
