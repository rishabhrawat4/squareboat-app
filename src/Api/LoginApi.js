import axios from "axios";

const LoginApi = async (email, password) => {
  var resp = null
  await axios.post('https://jobs-api.squareboat.info/api/v1/auth/login', {
      email,
      password
  }).then((response) => {
    console.log(response)
    resp = response.data.data
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default LoginApi;