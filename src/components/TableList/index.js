import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../../store/actions/user";
import axios from "axios";

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users").then(
      (res) => {
        let users = res.data;
        this.setState({ users: users.data });
      },
      (error) => {
        console.log(`Error: ${error}`);
      }
    );
  }

  render() {
    const { editUserBtn } = this.props;

    return (
      <>
        <table className="table user-list d-grid">
          <thead>
            <tr className="d-flex col-12">
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
            {this.state.users.map((user) => (
              <tr
                key={user.id}
                className="col-12 align-items-center d-flex justify-content-between"
                onClick={() => editUserBtn(user)}
              >
                <td className="col-4 d-flex align-items-center">
                  <img src={user.avatar} alt="" />

                  <p className="user-link m-0">{user.first_name}</p>
                </td>

                <td className="col-4 d-flex align-items-center">
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className="col-auto d-flex">
                  <button
                    className="table-link btn"
                    onClick={() => editUserBtn(user)}
                  >
                    <span className="fa-stack">
                      <i className="fa fa-eye fa-stack-1x fa-inverse btn btn-primary p-1"></i>
                    </span>
                  </button>
                  <button className="table-link btn">
                    <span className="fa-stack">
                      <i className="fa fa-pencil fa-stack-1x fa-inverse btn btn-success p-1"></i>
                    </span>
                  </button>
                  <button className="table-link danger btn">
                    <span className="fa-stack">
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse btn btn-danger p-1"></i>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userValue: state.userState.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
