import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6" className="pt-5">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <LoginForm />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
