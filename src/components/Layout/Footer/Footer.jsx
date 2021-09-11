import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col className="col-12 col-md">
                        <small className="d-block mb-3">&copy; KrisOnCode 2021</small>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
