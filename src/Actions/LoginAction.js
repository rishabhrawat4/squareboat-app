export const emailInputAction = (val) => {
  return {
    type: "emailInput",
    payload: val
  }
};

export const passwordInputAction = (val) => {
  return {
    type: 'passwordInput',
    payload: val
  }
}

export const loginDataAction = (val) => {
  return {
    type: 'loginData',
    payload: val
  }
}

export const loginFailedAction = (val) => {
  return {
    type: 'loginFailed',
    payload: val
  }
}

export const loginLoadingAction = (val) => {
  return {
    type: 'loginLoading',
    payload: val
  }
}

export const logoutAction = () => {
  return {
    type: 'logout',
  }
}
