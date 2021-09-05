import React from 'react';
import "./Style/HomeScreenStyle.css";
import "./Style/HeaderStyle.css"
import LoginForm from './LoginScreen';
import { 
  Container,
  Navbar,
  Nav,
  Button
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpScreen from './SignUpScreen';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutAction } from '../Actions/LoginAction';

class Header extends React.Component{
  onLogoutButtonClicked = () => {
    this.props.logoutAction()
    console.log(this.props.login)
  }
  render(){
    return(
      <Navbar>
        <Container>
          <Link to="/" className="header-title">MyJobs</Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { !this.props.login.hasLogin ?
              <Nav.Link>
                <Link to='/login' className="header-content mx-3">Login</Link>
              </Nav.Link>
              :
              <Navbar.Text>
                { this.props.login.hasLogin && this.props.login.loginData.userRole === 1 
                ?
                <Link to='/postJob' className="header-content mx-3"><span style={{ color: "white"}}>Post A job</span></Link>
                :
                null
                }
                
                <Button variant="primary" type="button" onClick={this.onLogoutButtonClicked}>
                  Logout
                </Button>
              </Navbar.Text>
             }
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(logoutAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));