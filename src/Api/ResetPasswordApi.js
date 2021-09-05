import axios from "axios";

const ResetPasswordApi = async (password, confirmPassword, token) => {
  var resp = null
  await axios.post('https://jobs-api.squareboat.info/api/v1/auth/resetpassword', {
      password: password,
      confirmPassword: confirmPassword,
      token: token
  }).then((response) => {
    console.log(response)
    resp = response.data.data
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default ResetPasswordApi;