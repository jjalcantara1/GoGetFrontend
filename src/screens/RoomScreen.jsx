import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomTypesDetail } from '../actions/roomTypeActions';
import '../SelectRoom.css';
import { useParams } from 'react-router-dom';
import BlankHeader from "../components/BlankHeader";
import './RoomScreenText.css';

function RoomScreen() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { roomTypes, loading, error } = useSelector((state) => state.roomTypes);

    useEffect(() => {
        dispatch(fetchRoomTypesDetail(id));
    }, [dispatch, id]);
    
    
    return (
        <>
            <BlankHeader />
            <div className='Contents'>
                <Link to="/selectroom" className="btn btn-light my-3">
                    Back to Room Selection
                </Link>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    roomTypes && (
                        <div className="centered">
                            <Row>
                                <Col md={5}>
                                <Card className="indivCard1">
                                <Image src={roomTypes.image} alt={roomTypes.name} className='RoomImage'></Image>
                                </Card>
                                </Col>
                                <Col md={5}>
                                    <Card className="indivCard">
                                        <ListGroup variant="flush">
                                            <ListGroupItem>
                                                <h3>{roomTypes.name}</h3>
                                            </ListGroupItem>
                                            <ListGroupItem className="roomText">
                                                <p>{roomTypes.description}</p>
                                            </ListGroupItem>
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
                                                    className="RoomScreenBook"
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
                            <div className='moreRows'>
                            {/* Add margin between additional rows */}
                            <div className="additionalRows" style={{ marginTop: '20px' }}>
                                <Row>
                                    <Col>
                                        <h3 className='detailedText'>{roomTypes.name}</h3>
                                    </Col>
                                    <Col>
                                    <h3 className='detailedTextFilter'>
                                        - NON-Smoking Room
                                    </h3>
                                    <h3 className='detailedTextFilter'>
                                        - No Pets
                                    </h3>
                                    </Col>
                                    <Col>
                                    <h3 className='detailedTextPrice'>₱{roomTypes.price}/per night</h3>
                                    </Col>
                                </Row>
                            </div>
                            <div className="additionalRows" style={{ marginTop: '20px' }}>
                                <Row>
                                    <Col>
                                    <h3 className='detailedText'>'Pet Friendly'</h3>
                                        <h3 className='detailedText'>{roomTypes.name}</h3>
                                    </Col>
                                    <Col>
                                    <h3 className='detailedTextFilter'>
                                        - NON-Smoking Room
                                    </h3>
                                    <h3 className='detailedTextFilter'>
                                        - Pets are allowed
                                    </h3>
                                    </Col>
                                    <Col>
                                    <h3 className='detailedTextPrice'>₱{roomTypes.price}/per night</h3>
                                    </Col>
                                </Row>
                            </div>
                            <div className="additionalRows" style={{ marginTop: '20px' }}>
                                <Row>
                                    <Col>
                                    <h3 className='detailedText'>'SMOKING'</h3>
                                        <h3 className='detailedText'>{roomTypes.name}</h3>
                                    </Col>
                                    <Col>
                                    <h3 className='detailedTextFilter'>
                                        - Smoking Room
                                    </h3>
                                    <h3 className='detailedTextFilter'>
                                        - No Pets
                                    </h3>
                                    </Col>
                                    <Col>
                                    <h3 className='detailedTextPrice'>₱{roomTypes.price}/per night</h3>
                                    </Col>
                                </Row>
                            </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    );
}

export default RoomScreen;
