import logo from './logo.svg';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/LoginScreen';
import SignUpScreen from './Components/SignUpScreen';
import JobPostingScreen from './Components/JobPostingScreen';
import PostJobScreen from './Components/PostJobScreen';
import ForgotPasswordScreen from './Components/ForgotPasswordScreen'; 
import ResetPasswordScreen from './Components/ResetPasswordScreen';
import ApplicationScreen from './Components/ApplicationScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} />
      <Route path="/signup" component={SignUpScreen} />
      <Route path="/jobPosting" component={JobPostingScreen} />
      <Route path="/postJob" component={PostJobScreen} />
      <Route path="/forgotPassword" component={ForgotPasswordScreen} />
      <Route path="/resetPassword" component={ResetPasswordScreen} />
      <Route path="/applications" component={ApplicationScreen} />
    </Switch>
  );
}

export default App;
