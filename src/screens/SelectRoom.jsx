import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { fetchRoomTypes } from "../actions/roomTypeActions";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import "../SelectRoom.css";
import BlankHeader from "../components/BlankHeader";

function SelectRoom() {
  const dispatch = useDispatch();
  const roomTypes = useSelector((state) => state.roomTypes.roomTypes);

  useEffect(() => {
    dispatch(fetchRoomTypes());
  }, [dispatch]);

  return (
    <>
    <BlankHeader />
    <div className="Contents">
      <Container fluid>
        <h1 className="title">Available Rooms</h1>
        <Row className="product-grid">
          {roomTypes && Array.isArray(roomTypes) && roomTypes.map((type, index) => (
              <Product key={index} product={type} />
            ))}
        </Row>
        {/* Button to navigate to the booking page */}
        <div className="button">
          <Link to="/booknow" className="bookNowButton">
            BOOK NOW
          </Link>
        </div>
      </Container>
      </div>
    </>
  );
}

export default SelectRoom;
