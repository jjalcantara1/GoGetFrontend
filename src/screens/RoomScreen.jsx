import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomTypes } from '../actions/roomTypeActions'; // Assuming your action file is named roomActions.js
import '../SelectRoom.css';

function RoomScreen() {
    const dispatch = useDispatch();
    const { roomTypes, loading, error } = useSelector((state) => state.roomTypes);

    useEffect(() => {
        dispatch(fetchRoomTypes());
    }, [dispatch]);

    return (
        <>
            <Link to="/" className="btn btn-light my-3">
                Back to Homepage
            </Link>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                roomTypes && (
                    <Row>
                        <Col md={8}>
                            <Image src={roomTypes.image} alt={roomTypes.name} fluid></Image>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroupItem>
                                        <h3>{roomTypes.name}</h3>
                                    </ListGroupItem>
                                    <ListGroupItem className="roomText">
                                        <p>{roomTypes.description}</p>
                                    </ListGroupItem>
                                </ListGroup>
                                <ListGroup variant="flush">
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>₱{roomTypes.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Availability</Col>
                                            <Col>
                                                {roomTypes.countInStock > 0 ? 'Available' : 'Fully Booked'}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Button
                                            className="btn-block"
                                            type="button"
                                            disabled={roomTypes.countInStock === 0}
                                        >
                                            Book a Room
                                        </Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )
            )}
        </>
    );
}

export default RoomScreen;
