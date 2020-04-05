import React, { Component } from "react";
import { connect } from "react-redux";

class InputCreateUser extends Component {
  render() {
    const { userModule } = this.props;
    return (
      <>
<<<<<<< HEAD
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
=======
        <p className="text-center">Usuário Selecionado</p>
        <p>
          Nome: <b>{userModule.first_name}</b>
        </p>
        <p>
          Email: <b>{userModule.email}</b>
        </p>
>>>>>>> a2a16a67fc01b04fe8f220931ed5e37667a4e987
      </>
    );
  }
}

export default connect((state) => ({
  userModule: state.userState.user,
}))(InputCreateUser);
