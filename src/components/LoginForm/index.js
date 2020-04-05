import React, { Component } from "react";
import { Title } from "../../styles";

class Login extends Component {
  render() {
    return (
      <form>
        <Title fontSize={25}>Login</Title>

        <div className="form-group">
          <label>E-mail</label>
          <input type="email" className="form-control" placeholder="E-mail" />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input type="password" className="form-control" placeholder="Senha" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
