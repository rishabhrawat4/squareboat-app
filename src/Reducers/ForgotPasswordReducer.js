const INITIAL_STATE = {
  failedEmailVerification: false,
  verifiedToken: null,
  email: "",
  password: "",
  confirmPassword: "",
  failedResetPassword: false
}
const LoginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "verifyEmail":
      return {
        ...state,
        hasEmailVerified: true,
        verifiedToken: action.payload
      };
    case "verifyFailureEmail":
      return {
        ...state,
        failedEmailVerification: true,
        verifiedToken: null,
        email: ""
      };
    case "emailInput":
      return {
        ...state,
        email: action.payload
      };
    case "passwordInput":
      return {
        ...state,
        password: action.payload
      };
    case "confirmPasswordInput":
      return {
        ...state,
        confirmPassword: action.payload
      };
    case "resetPasswordFailed":
      return {
        ...state,
        failedResetPassword: true
      };
    default: 
      return state;
  }
}

export default LoginReducer;