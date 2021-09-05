import React from 'react';
import LoginApi from '../Api/LoginApi';
import { connect } from "react-redux";
import { emailInputAction, passwordInputAction, loginDataAction, loginFailedAction, loginLoadingAction, } from '../Actions/LoginAction'
import { Container, Card, Button, Row, Col, Form, InputGroup, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/LoginScreenStyle.css";
import {withRouter, Redirect} from 'react-router-dom'
import Header from './Header';
import { Link } from 'react-router-dom'


class LoginForm extends React.Component{

  constructor(props){
    super(props);
  }
  onEmailChange = (event) => {
    // console.log("email: ", event.target.value);
    this.props.emailInputAction(event.target.value)
  }

  onPasswordChange = (event) => {
    // console.log("password: ", event.target.value)
    this.props.passwordInputAction(event.target.value)
  }

  
  onLoginButtonClicked = () => {
    this.props.loginLoadingAction(true);
    const resp = LoginApi(this.props.login.email, this.props.login.password);
    resp.then(result => {
      if(result){
        this.props.loginDataAction(result);
        this.props.history.push('/')
      }
        
      else{
        this.props.loginFailedAction(true)
      }
    })

    console.log(this.props.login)
  }

  onDemoClicked = () => {
    this.props.history.push('/')
  }
  render(){
    return (
      <Container fluid className="container-bg">
        <Header />
        <Row className="justify-content-md-center">
          <Col xs={12} md="auto">
          {this.props.login.loginLoading 
          ?
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          :
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    className={this.props.login.loginFailed ? "border-error" : null}
                    type="email" 
                    placeholder="Enter email" 
                    onChange={this.onEmailChange} 
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  className={this.props.login.loginFailed ? "border-error" : null}
                  type="password"
                  placeholder="Password" 
                  onChange={this.onPasswordChange}
                />
              </Form.Group>
              {this.props.login.loginFailed 
                ? 
                ( <Alert variant="danger">
                  Please enter correct username and password
                </Alert>
                )
                :
                null
              }
              <Form.Group className="d-flex justify-content-center m-3">
                <Button className="align-self-center px-3" variant="primary" type="button" onClick={this.onLoginButtonClicked}>
                  Submit
                </Button>
              </Form.Group>
              
            </Form>
            <Card.Text className="d-flex justify-content-center">
              <Link to='/forgotPassword'> <span className="mx-1">Forgot Password</span></Link>
            </Card.Text>
            <Card.Text className="d-flex justify-content-center">
              New to MyJobs 
              <Link to='/signup'> <span className="mx-1">Create an account</span></Link>
            </Card.Text>
            </Card.Body>
          </Card>
  }
          </Col>
        </Row>

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  emailInputAction: (payload) => dispatch(emailInputAction(payload)),
  passwordInputAction: (payload) => dispatch(passwordInputAction(payload)),
  loginDataAction: (payload) => dispatch(loginDataAction(payload)),
  loginFailedAction: (payload) => dispatch(loginFailedAction(payload)),
  loginLoadingAction: (payload) => dispatch(loginLoadingAction(payload))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
