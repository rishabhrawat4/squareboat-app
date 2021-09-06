import React from 'react';
import "./Style/HomeScreenStyle.css";
import LoginForm from './LoginScreen';
import { 
  Container,
  Row,
  Col,
  Image,
  Card
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpScreen from './SignUpScreen';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { logoutAction } from '../Actions/LoginAction';
import JobPostingScreen from './JobPostingScreen';
import Header from './Header';

class HomeScreen extends React.Component{
  onLogoutButtonClicked = () => {
    this.props.logoutAction()
  }

  renderHomeScreen = () => {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="header-intro">
              Welcome to my Jobs
            </h1>
          </Col>
          <Col>
            <Image src="../Images/recruiter.jpg" fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="my-3">
              Why Us
            </h4>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
          <Card className="shadow">
            <Card.Body> 
              <Card.Text className="card-heading">
                <h2>Get More Visibility</h2>
              </Card.Text>
              <Card.Text>
                Sit mollit occaecat nisi laborum adipisicing ad consectetur quis tempor. Dolore velit laborum officia veniam sit minim irure nulla eu veniam dolor. Consequat sit aute incididunt culpa.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="shadow">
            <Card.Body> 
            <Card.Text className="card-heading">
                <h2>Get More Visibility</h2>
              </Card.Text>
              <Card.Text>
                Sit mollit occaecat nisi laborum adipisicing ad consectetur quis tempor. Dolore velit laborum officia veniam sit minim irure nulla eu veniam dolor. Consequat sit aute incididunt culpa.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="shadow">
            <Card.Body> 
            <Card.Text className="card-heading">
                <h2>Get More Visibility</h2>
              </Card.Text>
              <Card.Text>
                Sit mollit occaecat nisi laborum adipisicing ad consectetur quis tempor. Dolore velit laborum officia veniam sit minim irure nulla eu veniam dolor. Consequat sit aute incididunt culpa.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col className="my-3">
            <h4>
              Companies Who Trust Us
            </h4>
          </Col>
        </Row>
        <Row className="my-3">
        <Col className="d-flex justify-content-center">
          <span>Solyatic</span>
        </Col>
        <Col className="d-flex justify-content-center">
          <span>Kanba</span>
        </Col>
        <Col className="d-flex justify-content-center">
          <span>LightAi</span>
        </Col>
        <Col className="d-flex justify-content-center">
          <span>Ztas</span>
        </Col>
        </Row>
        <Row className="my-3">
        <Col className="d-flex justify-content-center">
          <span>Solyatic</span>
        </Col>
        <Col className="d-flex justify-content-center">
          <span>Kanba</span>
        </Col>
        <Col className="d-flex justify-content-center">
          <span>LightAi</span>
        </Col>
        <Col className="d-flex justify-content-center">
          <span>Ztas</span>
        </Col>
        </Row>
      </Container>
    )
  }
  render(){
    return(
      <Container fluid className="padding-zero">
        <Container fluid className="container-style">
          <Header />
          { this.props.login.hasLogin 
          ?
            
            <JobPostingScreen /> 
          :
          this.renderHomeScreen()
          }
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login,
  forgotPassword: state.forgotPassword,
  signup: state.signup
});

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(logoutAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));