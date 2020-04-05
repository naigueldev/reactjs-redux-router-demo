import React, { Component } from "react";
import { connect } from "react-redux";

class InputCreateUser extends Component {
  render() {
    const { userModule } = this.props;
    return (
      <>
        <p className="text-center">Usuário Selecionado</p>
        <p>
          Nome: <b>{userModule.first_name}</b>
        </p>
        <p>
          Email: <b>{userModule.email}</b>
        </p>
      </>
    );
  }
}

export default connect((state) => ({
  userModule: state.userState.user,
}))(InputCreateUser);
