import React from 'react';
import { Container, Card, Button, Row, Col, Form, InputGroup, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/HomeScreenStyle.css";
import { } from '../Actions/SignUpActions'
import { successEmailVerificationAction, failureEmailVerificationAction, onEmailInputAction } from '../Actions/ForgotPasswordActions';
import { connect } from "react-redux";
import VerifyEmailApi from '../Api/VerifyEmailApi';
import "./Style/HomeScreenStyle.css";
import { withRouter } from 'react-router-dom';
import Header from './Header';

class ForgotPasswordScreen extends React.Component{

  onSubmitButtonClicked = () => {
    const resp = VerifyEmailApi(this.props.forgotPassword.email)
    resp.then((result) => {
      if(result){
        this.props.successEmailVerificationAction(result.token)
        this.props.history.push('/resetPassword')
      } else{
        // this.props.signUpFailedAction(true)
        this.props.failureEmailVerificationAction()
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
            <Card.Header>Forgot your password? </Card.Header>
            <Card.Body>
            <Card.Text>
              Enter the email associated with your account and we'll send you instructions to reset your password
            </Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    className={this.props.forgotPassword.failedEmailVerification ? "border-error" : null}
                    type="email" 
                    placeholder="Enter your email" 
                    onChange={(e) => this.props.onEmailInputAction(e.target.value)}
                  />
              </Form.Group>
              <Button variant="primary" type="button" onClick={() => this.onSubmitButtonClicked()}>
                Submit
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
  forgotPassword: state.forgotPassword
});

const mapDispatchToProps = dispatch => ({
  successEmailVerificationAction: (payload) => dispatch(successEmailVerificationAction(payload)),
  failureEmailVerificationAction: () => dispatch(failureEmailVerificationAction()),
  onEmailInputAction: (payload) => dispatch(onEmailInputAction(payload))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen));