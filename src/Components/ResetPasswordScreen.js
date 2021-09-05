import React from 'react';
import { Container, Card, Button, Row, Col, Form, InputGroup, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/HomeScreenStyle.css";
import { userTypeInputAction, fullNameInputAction, emailInputAction, passwordInputAction, confirmPasswordInputAction, skillsInputAction, signUpFailedAction, signUpSuccessAction } from '../Actions/SignUpActions'
import { loginDataAction } from '../Actions/LoginAction';
import { connect } from "react-redux";
import RegisterApi from '../Api/RegisterApi';
import "./Style/HomeScreenStyle.css";
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { onPasswordInputAction, onConfirmPasswordInputAction, resetPasswordFailedAction  } from '../Actions/ForgotPasswordActions'
import ResetPasswordApi from '../Api/ResetPasswordApi';
class ResetPasswordScreen extends React.Component{

  onResetButtonClicked = () => {
    const resp = ResetPasswordApi(this.props.forgotPassword.password, this.props.forgotPassword.confirmPassword, this.props.forgotPassword.verifiedToken)
    resp.then((result) => {
      if(result){
        this.props.loginDataAction(result)
        this.props.history.push('/')
      } else{
        this.props.resetPasswordFailedAction()
      }
        
    })
  }
  render(){
    return (
      <Container fluid className="container-bg">
        <Header />
        <Row className="justify-content-md-center">
          <Col xs={6} md="auto">
          { false 
          ?
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          :
          <Card>
            <Card.Header>Reset your password? </Card.Header>
            <Card.Body>
            <Card.Text>
              Enter your new password below
            </Card.Text>
            <Form>
              <Form.Group className="mb-3">
                  <Form.Label>password</Form.Label>
                  <Form.Control 
                    className={this.props.forgotPassword.failedResetPassword ? "border-error" : null}
                    type="password" 
                    placeholder="Enter your password" 
                    onChange={(e) => this.props.onPasswordInputAction(e.target.value)}
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control 
                    className={this.props.forgotPassword.failedResetPassword ? "border-error" : null}
                    type="password" 
                    placeholder="Confirm your password" 
                    onChange={(e) => this.props.onConfirmPasswordInputAction(e.target.value)}
                  />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.onResetButtonClicked}>
                Reset
              </Button>
            </Form>
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
  signUp: state.signUp,
  forgotPassword: state.forgotPassword
});

const mapDispatchToProps = dispatch => ({
  onPasswordInputAction: (payload) => dispatch(onPasswordInputAction(payload)),
  onConfirmPasswordInputAction: (payload) => dispatch(onConfirmPasswordInputAction(payload)),
  resetPasswordFailedAction: () => dispatch(resetPasswordFailedAction()),
  loginDataAction: (payload) => dispatch(loginDataAction(payload))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen));