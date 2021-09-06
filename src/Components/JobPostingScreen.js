import React from 'react';
import "./Style/HomeScreenStyle.css";
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
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GetJobApi from '../Api/GetJobApi';
import { getJobDataAction, showApplicationsAction, setTotalCountAction, errorJobDataAction } from '../Actions/GetJobActions';
import ApplicationScreen from './ApplicationScreen';
import ReactPaginate from 'react-paginate';
import './Style/JobPostingScreenStyle.css';
import RecruiterGetJobApi from '../Api/RecruiterGetJobApi';

class JobPostingScreen extends React.Component {
  componentDidMount(){
    var resp = null;
    if(this.props.login.loginData.userRole === 0){
      resp = RecruiterGetJobApi(this.props.login.loginData.token);
    }else{
      resp = GetJobApi(1);
    }
    
    resp.then((result) => {
      if(result){
        this.props.getJobDataAction({data: result.data, totalCount: result.totalCount})
        // this.props.setTotalCountAction(result.totalCount)
      } else {
        this.props.errorJobDataAction()
      }
      
    })
  }

  onButtonClicked = (jobId) => {
    this.props.showApplicationsAction(jobId)
  }
  
  renderItems = (item) => {
    return (
      <Card className="col-3 m-3 shadow">
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text href="#">{item.location}</Card.Text>
          { this.props.login.loginData.userRole == 0 
          ?
          <Button variant="primary" type="button" onClick={() => this.onButtonClicked(item.id)}>
            View Application
          </Button>
          :
          null
          }
        </Card.Body>

      </Card>
    )
  }

  handlePageClick = (e) => {
    var resp = GetJobApi(e.selected+1);
    resp.then((result) => {
      this.props.getJobDataAction({data: result.data, totalCount: result.totalCount})
    })
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

        { this.props.getJob.totalCount ?
        <div className="paginate-container">
          <ReactPaginate
            previousLabel={"<< Prev"}
            nextLabel={"Next >>"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(this.props.getJob.totalCount/20)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        :
        <div className="my-3 empty-application">
          <span className="mx-3">Your posted jobs will be shown here</span>
          <Button onClick={() => this.props.history.push('/postJob')}>Post a Job</Button>
        </div>
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
  showApplicationsAction: (payload) => dispatch(showApplicationsAction(payload)),
  setTotalCountAction: (payload) => dispatch(setTotalCountAction(payload)),
  errorJobDataAction: () => dispatch(errorJobDataAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobPostingScreen));