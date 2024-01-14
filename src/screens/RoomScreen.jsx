import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'
import products from '../products.js'
import "../SelectRoom.css"


function RoomScreen() {
    const { id } = useParams()
    const product = products.find((p) => p._id === id)
    return (
    <>
        <Link to="/" className="btn btn-light my-3">
            Back to Homepage
        </Link>
            <Row>
            <Col md={8}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem className='roomText'>
                            <p>{product.description}</p>
                        </ListGroupItem>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>₱{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Availability</Col>
                                <Col>
                                    {product.countInStock > 0 ? "Available" : "Fully Booked"}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                Book a Room
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
    )
}

export default RoomScreen