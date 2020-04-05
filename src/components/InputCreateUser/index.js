import React, { Component } from "react";
import { connect } from "react-redux";

class InputCreateUser extends Component {
  render() {
    const { userModule } = this.props;
    return (
      <>
        <h5 className="text-center">Usuário Selecionado</h5>
        <div>
          <label>Nome:</label>
          <input
            value={userModule.first_name}
            className="form-control"
            readOnly
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input value={userModule.email} className="form-control" readOnly />
        </div>
      </>
    );
  }
}

export default connect((state) => ({
  userModule: state.userState.user,
}))(InputCreateUser);
