import React, {Component, Fragment} from 'react';
import FacebookLogin from "../../components/Auth/FacebookLogin/FacebookLogin";
import {Col, FormGroup, PageHeader} from "react-bootstrap";

class Login extends Component {

  render() {
    return (
      <Fragment>
        <PageHeader>Login</PageHeader>
        <Col smOffset={2} sm={10}><FacebookLogin /></Col>
        <FormGroup>

        </FormGroup>
      </Fragment>
    )
  }
}

export default Login;