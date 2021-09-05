import React from 'react';
import "./Style/HomeScreenStyle.css";
import LoginForm from './LoginScreen';
import { 
  Container,
  Row,
  Col,
  Breadcrumb,
  Card,
  Navbar,
  Nav,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpScreen from './SignUpScreen';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GetJobApi from '../Api/GetJobApi';
import { getJobDataAction, showApplicationsAction } from '../Actions/GetJobActions';
import ApplicationScreen from './ApplicationScreen';

class JobPostingScreen extends React.Component {
  componentDidMount(){
    var resp = GetJobApi();
    resp.then((result) => {
      this.props.getJobDataAction(result)
    })
    
  }

  onButtonClicked = () => {
    this.props.showApplicationsAction()
    console.log(this.props.getJob)

  }
  renderItems = (item) => {
    return (
      <Card className="col-3 m-3">
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text href="#">{item.location}</Card.Text>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
          <Button variant="primary" type="button" onClick={this.onButtonClicked}>
          View Application
        </Button>
        </Card.Body>

      </Card>
    )
  }
  render(){
    return (
      <Container>
        <Container className={this.props.getJob.showApplication ? "opacity-25" : null}>
        <Row>
          <Col>
            <Breadcrumb>
              <Link to="/"> <Breadcrumb.Item active>Home</Breadcrumb.Item></Link>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col >
            <span style={{color: "white"}}>Jobs Posted By You</span>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          {this.props.getJob.jobDataArray != null
          ?
          this.props.getJob.jobDataArray.map((item) => this.renderItems(item))
          :
          null
          }
          
        </Row>
        </Container>
        {this.props.getJob.showApplication
        ?
        <ApplicationScreen />
        :
        null
        }

      </Container>
      
    )
  }
}

const mapStateToProps = state => ({
  login: state.login,
  getJob: state.getJob
});

const mapDispatchToProps = dispatch => ({
  getJobDataAction: (payload) => dispatch(getJobDataAction(payload)),
  showApplicationsAction: () => dispatch(showApplicationsAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobPostingScreen));