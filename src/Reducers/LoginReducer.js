const INITIAL_STATE = {
  email: "",
  password: "",
  hasLogin: false,
  loginData: null,
  loginFailed: false,
  loginLoading: false
}
const LoginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
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
    case "loginData": 
      return {
        ...state,
        hasLogin: true,
        loginData: action.payload,
        loginFailed: false,
        loginLoading: false
      };
    case "loginFailed": 
      return {
        ...state,
        loginFailed: action.payload,
        loginLoading: false,
      };
    case "loginLoading": 
      return {
        ...state,
        loginLoading: action.payload
      }
    case "logout": 
      return {
        ...state,
        email: "",
        password: "",
        hasLogin: false,
        loginData: null,
        loginFailed: false,
      }
    default: 
      return state;
  }
}

export default LoginReducer;