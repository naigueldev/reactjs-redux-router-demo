import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TableList from "../../components/TableList";
import InputCreateUser from "../../components/InputCreateUser";

export default function User() {
  return (
    <Container className="bootstrap snippet">
      <Row className="justify-content-md-center">
        <Col xs lg="8" className="pt-5">
          <Row className="m-0">
            <Col lg="12" className="main-box no-header p-3">
              <InputCreateUser />
            </Col>
          </Row>
          <div className="main-box no-header clearfix">
            <div className="main-box-body clearfix">
              <div className="table-responsive">
                <TableList />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
