export const userTypeInputAction = (val) => {
  return {
    type: 'userTypeInput',
    payload: val
  }
}

export const emailInputAction = (val) => {
  return {
    type: "emailInput",
    payload: val
  }
};


export const fullNameInputAction = (val) => {
  return {
    type: "fullNameInput",
    payload: val
  }
};

export const passwordInputAction = (val) => {
  return {
    type: 'passwordInput',
    payload: val
  }
}

export const confirmPasswordInputAction = (val) => {
  return {
    type: 'confirmPasswordInput',
    payload: val
  }
}

export const skillsInputAction = (val) => {
  return {
    type: 'skillsInput',
    payload: val
  }
}

export const signUpFailedAction = (val) => {
  return {
    type: 'signUpFailed',
    payload: val
  }
}

export const signUpSuccessAction = () => {
  return {
    type: 'signUpSuccess',
  }
}

