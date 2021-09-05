import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SignUpReducer from './SignUpReducer';
import GetJobDataReducer from './GetJobDataReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';

export default combineReducers({
  login: LoginReducer,
  signUp: SignUpReducer,
  getJob: GetJobDataReducer,
  forgotPassword: ForgotPasswordReducer
});