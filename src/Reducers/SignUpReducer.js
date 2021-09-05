const INITIAL_STATE = {
  userType: 1,
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  skills: "",
  signUpFailed: false,
  signUpLoading: false,
  signUpFailed: false
}

const SignUpReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'userTypeInput':
      return {
        ...state,
        userType: action.payload
      };
    case 'emailInput':
      return {
        ...state,
        email: action.payload
      };
    case 'fullNameInput':
      return {
        ...state,
        fullName: action.payload
      };
    case 'passwordInput':
      return {
        ...state,
        password: action.payload
      };
    case 'confirmPasswordInput':
      return {
        ...state,
        confirmPassword: action.payload
      };
    case 'skillsInput':
      return {
        ...state,
        skills: action.payload
      };
    case "signUpSuccess": 
      return {
        ...state,
        userType: 1,
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        skills: "",
        signUpFailed: false,
        signUpLoading: false,
        signUpFailed: false
      };
    case "signUpFailed": 
      return {
        ...state,
        signUpFailed: true,
        // signUpLoading: false
      } ;
    case "signUpLoading": 
      return {
        ...state,
        signUpLoading: true
      }
    default: 
      return state
  }
}

export default SignUpReducer;