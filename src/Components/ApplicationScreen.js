import React from 'react';
import "./Style/HomeScreenStyle.css";
import "./Style/ApplicationScreenStyle.css";
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
import { getJobDataAction, hideApplicationsAction } from '../Actions/GetJobActions';
import JobCandidatesApi from '../Api/JobCandidatesApi';
class ApplicationScreen extends React.Component {

  componentDidMount(){
    var resp = null;
    resp = JobCandidatesApi(this.props.login.loginData.token, this.props.getJob.jobId)
    resp.then((result) => {
      if(result){
      }
      else if(result == undefined){
      }
    })
  }
  renderApplication = () => {
    return (
      <div>Hello</div>
    )
  }
  render(){
    return (
      <Container className="main-container">
        <Row>
          <Col>
            <Card className="col-8 mx-auto shadow-lg">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between border-bottom">
                  <span>Applications for this job</span>
                  <Button onClick={() => this.props.hideApplicationsAction()}>Close</Button>
                </Card.Title>
                <Card.Title>0 Applications</Card.Title>
                <Card.Title className="empty-application">
                  No Application Available
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
  hideApplicationsAction: () => dispatch(hideApplicationsAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ApplicationScreen));