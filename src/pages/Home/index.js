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
<<<<<<< HEAD
              <p className="mb-0">
                Projeto demo criado para implementação e utilização de:
              </p>
              <p className="lead">
                Redux, Router, Axios, Bootstrap, Pages e Components
              </p>
=======
              <p className="mb-0">Projeto demo criado para implementação de:</p>
              <p className="lead">Redux, Router, Axios e Bootstrap</p>
>>>>>>> a2a16a67fc01b04fe8f220931ed5e37667a4e987
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
