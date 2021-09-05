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

class PostJobScreen extends React.Component{

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
    console.log(this.props.signUp)
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
            <Card.Header>Post A Job</Card.Header>
            <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control 
                    className={this.props.signUp.signUpFailed ? "border-error" : null}
                    type="text" 
                    placeholder="Enter Job Title" 
                    onChange={(e) => this.props.fullNameInputAction(e.target.value)}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control 
                    className={this.props.signUp.signUpFailed ? "border-error" : null}
                    type="text" 
                    placeholder="Enter Job Description" 
                    onChange={(e) => this.props.emailInputAction(e.target.value)} 
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control 
                  className={this.props.signUp.signUpFailed ? "border-error" : null}
                  type="text"
                  placeholder="Enter Location" 
                  onChange={(e) => this.props.passwordInputAction(e.target.value)}
                />
              </Form.Group>

             
             
              <Button variant="primary" type="button" onClick={this.onSignUpButtonClicked}>
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
  signUp: state.signUp
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostJobScreen));