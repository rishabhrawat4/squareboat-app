import React from 'react';
import { Container, Card, Button, Row, Col, Form, InputGroup, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userTypeInputAction, fullNameInputAction, emailInputAction, passwordInputAction, confirmPasswordInputAction, skillsInputAction, signUpFailedAction, signUpSuccessAction } from '../Actions/SignUpActions'
import { loginDataAction } from '../Actions/LoginAction';
import { connect } from "react-redux";
import RegisterApi from '../Api/RegisterApi';
import "./Style/HomeScreenStyle.css";
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { Link } from 'react-router-dom'

class SignUpScreen extends React.Component{

  onSignUpButtonClicked = () => {
    const resp = RegisterApi(parseInt(this.props.signUp.userType), this.props.signUp.fullName, this.props.signUp.email, this.props.signUp.password, this.props.signUp.confirmPassword, this.props.signUp.skills)
    resp.then((result) => {
      if(result){
        this.props.loginDataAction(result)
        this.props.signUpSuccessAction()
        this.props.history.push('/')
      } else{
        this.props.signUpFailedAction(true)
      }
    })
  }
  render(){
    return (
      <Container fluid className="padding-zero">
        <Container fluid className="container-style">
        <Header />
        <Row className="justify-content-md-center ">
          <Col xs={12} md="auto" className="my-3">
          { false 
          ?
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          :
          <Card className="shadow">
            <Card.Header>Sign Up</Card.Header>
            <Card.Body>
            <Form>
            <Form.Label>I'am a </Form.Label>
              <div className="mb-3">
                <Form.Check
                  inline
                  label="Recruiter"
                  value={0}
                  name="group1"
                  checked={this.props.signUp.userType == 0}
                  type='radio'
                  onChange={(e) => this.props.userTypeInputAction(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Candidate"
                  value={1}
                  name="group1"
                  type='radio'
                  onChange={(e) => this.props.userTypeInputAction(e.target.value)}
                />
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control 
                    className={this.props.signUp.signUpFailed ? "border-error" : null}
                    type="text" 
                    value={this.props.signUp.fullName}
                    placeholder="Enter Fullname" 
                    onChange={(e) => this.props.fullNameInputAction(e.target.value)}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    className={this.props.signUp.signUpFailed ? "border-error" : null}
                    type="email" 
                    value={this.props.signUp.email}
                    placeholder="Enter email" 
                    onChange={(e) => this.props.emailInputAction(e.target.value)} 
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create password</Form.Label>
                <Form.Control 
                  className={this.props.signUp.signUpFailed ? "border-error" : null}
                  type="password"
                  value={this.props.signUp.password}
                  placeholder="Password" 
                  onChange={(e) => this.props.passwordInputAction(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control 
                  className={this.props.signUp.signUpFailed ? "border-error" : null}
                  type="password"
                  placeholder="Confirm Password" 
                  value={this.props.signUp.confirmPassword}
                  onChange={(e) => this.props.confirmPasswordInputAction(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Skills</Form.Label>
                <Form.Control 
                  className={this.props.signUp.signUpFailed ? "border-error" : null}
                  type="text"
                  placeholder="Skills" 
                  value={this.props.signUp.skills}
                  onChange={(e) => this.props.skillsInputAction(e.target.value)}
                />
              </Form.Group>
             
              <Form.Group className="d-flex justify-content-center m-3">
              <Button className="align-self-center px-3" variant="primary" type="button" onClick={this.onSignUpButtonClicked}>
                Submit
              </Button>
              </Form.Group>
            </Form>
            <Card.Text className="d-flex justify-content-center">
              Already have an account? 
              <Link to='/login'> <span className="mx-1">Login</span></Link>
            </Card.Text>
            </Card.Body>
          </Card>
          }
          </Col>
        </Row>
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  signUp: state.signUp
});

const mapDispatchToProps = dispatch => ({
  userTypeInputAction: (payload) => dispatch(userTypeInputAction(payload)),
  passwordInputAction: (payload) => dispatch(passwordInputAction(payload)),
  fullNameInputAction: (payload) => dispatch(fullNameInputAction(payload)),
  emailInputAction: (payload) => dispatch(emailInputAction(payload)),
  passwordInputAction: (payload) => dispatch(passwordInputAction(payload)),
  confirmPasswordInputAction: (payload) => dispatch(confirmPasswordInputAction(payload)),
  skillsInputAction: (payload) => dispatch(skillsInputAction(payload)),
  signUpFailedAction: (payload) => dispatch(signUpFailedAction(payload)),
  loginDataAction: (payload) => dispatch(loginDataAction(payload)),
  signUpSuccessAction: () => dispatch(signUpSuccessAction()),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpScreen));