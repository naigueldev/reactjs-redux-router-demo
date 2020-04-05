import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users").then(
      (res) => {
        let users = res.data;
        console.log(users.data);
        this.setState({ persons: users.data });
      },
      (error) => {
        console.log(`Error: ${error}`);
      }
    );
  }

  render() {
    return (
      <Container className="bootstrap snippet">
        <Row className="justify-content-md-center">
          <Col xs lg="8" className="pt-5">
            <div className="main-box no-header clearfix">
              <div className="main-box-body clearfix">
                <div className="table-responsive">
                  <table className="table user-list d-grid">
                    <thead>
                      <tr>
                        <th className="col-4">
                          <span>User</span>
                        </th>
                        <th className="col-4">
                          <span>Email</span>
                        </th>
                        <th className="col-4">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody className="d-grid">
                      {this.state.persons.map((person) => (
                        <tr
                          key={person.id}
                          className="col-12 align-items-center d-flex justify-content-between"
                        >
                          <td className="col-4 d-flex align-items-center">
                            <img src={person.avatar} alt="" />

                            <a
                              href={`/user/${person.id}`}
                              className="user-link"
                            >
                              {person.first_name}
                            </a>
                          </td>

                          <td className="col-4 d-flex align-items-center">
                            <a href={"/users"}>{person.email}</a>
                          </td>
                          <td className="col-auto d-flex">
                            <a href={"/users"} className="table-link">
                              <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-eye fa-stack-1x fa-inverse"></i>
                              </span>
                            </a>
                            <a href={"/users"} className="table-link">
                              <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                              </span>
                            </a>
                            <a href={"/users"} className="table-link danger">
                              <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                              </span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
