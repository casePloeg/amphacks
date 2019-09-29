import React from 'react';

import before from './../before.jpg'
import after from './../after.jpg'

import { Container, Row, Col, Card } from 'react-bootstrap';


import '../style/test.css';

function Testimonials() {
    return (
        <div className="testimonial">
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={before} />
                            <Card.Body>
                                {/* <Card.Title>Before UBenefitz</Card.Title> */}
                                <Card.Text>
                                    Before UBenefitz
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className="before">
                            <img />
                        </div>
                    </Col>
                    <Col xs={5}>
                        <div class="quote">
                            <blockquote>"After using UBenefitz, I saved $250 while lowering my stress levels at school"</blockquote>
                        </div>

                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={after} />
                            <Card.Body>
                                {/* <Card.Title>Before UBenefitz</Card.Title> */}
                                <Card.Text>
                                    After UBenefitz
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>





        </div>
    );
}

export default Testimonials;
