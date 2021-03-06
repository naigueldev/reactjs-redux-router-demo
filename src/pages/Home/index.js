import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm="8" className="pt-5">
          <div className="auth-wrapper">
            <div className="auth-inner col-12">
              <h1 className="display-4 mb-4">ReactJS - Projeto Demo</h1>
              <p className="mb-0">
                Projeto demo criado para implementação e utilização de:
              </p>
              <p className="lead">
                Redux, Router, Axios, Bootstrap, Pages e Components
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
