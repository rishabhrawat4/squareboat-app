import React from 'react';
import { Container, Card, Button, Row, Col, Form, InputGroup, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/HomeScreenStyle.css";
import { connect } from "react-redux";
import "./Style/HomeScreenStyle.css";
import { withRouter } from 'react-router-dom';
import Header from './Header';
import PostJobApi from '../Api/PostJobApi';
import { jobTitleInputAction, 
  descriptionInputAction, 
  locationInputAction, 
  successPostJobAction, 
  failurePostJobAction 
} from '../Actions/PostJobAction'

class PostJobScreen extends React.Component{

  onSignUpButtonClicked = () => {
    const resp = PostJobApi(this.props.login.loginData.token, this.props.postJob.jobTitle, this.props.postJob.description, this.props.postJob.location)
    
    resp.then((result) => {
      if(result){
        this.props.successPostJobAction()
        this.props.history.push('/')
      } else{
        this.props.failurePostJobAction()
        console.log(this.props.postJob)
      }
       
    })
    
  }
  render(){
    return (
      <Container fluid className="padding-zero">
        <Container fluid className="container-style">
        <Header />
        <Row className="justify-content-md-center">
          <Col xs={6} md="auto">
          { false 
          ?
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          :
          <Card className="shadow">
            <Card.Header>Post A Job</Card.Header>
            <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control 
                    className={this.props.postJob.hasFailedPostJob ? "border-error" : null}
                    type="text" 
                    placeholder="Enter Job Title" 
                    value={this.props.postJob.jobTitle}
                    onChange={(e) => this.props.jobTitleInputAction(e.target.value)}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control 
                    className={this.props.postJob.hasFailedPostJob ? "border-error" : null}
                    type="text" 
                    value={this.props.postJob.description}
                    placeholder="Enter Job Description" 
                    onChange={(e) => this.props.descriptionInputAction(e.target.value)} 
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control 
                  className={this.props.postJob.hasFailedPostJob ? "border-error" : null}
                  type="text"
                  value={this.props.postJob.location}
                  placeholder="Enter Location" 
                  onChange={(e) => this.props.locationInputAction(e.target.value)}
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
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  postJob: state.postJob,
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  jobTitleInputAction: (payload) => dispatch(jobTitleInputAction(payload)),
  descriptionInputAction: (payload) => dispatch(descriptionInputAction(payload)),
  locationInputAction: (payload) => dispatch(locationInputAction(payload)),
  successPostJobAction: () => dispatch(successPostJobAction()),
  failurePostJobAction: () => dispatch(failurePostJobAction()),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostJobScreen));