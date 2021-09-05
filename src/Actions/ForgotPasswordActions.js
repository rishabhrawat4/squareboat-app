export const successEmailVerificationAction = (val) => {
  return {
    type: 'verifyEmail',
    payload: val
  }
}

export const failureEmailVerificationAction = () => {
  return {
    type: 'verifyFailureEmail',
  }
}

export const onEmailInputAction = (val) => {
  return {
    type: 'emailInput',
    payload: val
  }
}

export const onPasswordInputAction = (val) => {
  return {
    type: 'passwordInput',
    payload: val
  }
}

export const onConfirmPasswordInputAction = (val) => {
  return {
    type: 'confirmPasswordInput',
    payload: val
  }
}

export const resetPasswordFailedAction = () => {
  return {
    type: 'resetPasswordFailed',
  }
}