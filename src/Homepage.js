import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center ">
      <Row className="mt-5 mb-3">Homepage</Row>

      <Row className="w-100" xs={2} md={4} lg={6}>
        <Col xs={2} md={4} lg={6}>
          <Button onClick={() => navigate("/login")}> Login </Button>
        </Col>
        <Col xs={2} md={4} lg={6}>
          <Button onClick={() => navigate("/signup")}> Signup </Button>
        </Col>
      </Row>
    </Container>
  );
}
