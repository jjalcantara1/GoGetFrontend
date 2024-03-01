import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { fetchRoomTypes } from "../actions/roomTypeActions";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import "../SelectRoom.css";

function SelectRoom() {
  const dispatch = useDispatch();
  const roomTypes = useSelector((state) => state.roomTypes.roomTypes);

  useEffect(() => {
    dispatch(fetchRoomTypes());
  }, [dispatch]);

  return (
    <Container fluid>
      <h1 className="title">Available Rooms</h1>
      <Row className="product-grid">
        {roomTypes &&
          roomTypes.map((type, index) => (
            <Product key={index} product={type} />
          ))}
      </Row>
    </Container>
  );
}

export default SelectRoom;
