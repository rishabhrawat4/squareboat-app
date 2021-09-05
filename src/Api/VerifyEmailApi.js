import axios from "axios";

const VerifyEmailApi = async (email) => {
  var resp = null
  await axios.get('https://jobs-api.squareboat.info/api/v1/auth/resetpassword', {
    params: {
      email: email
    }
  }).then((response) => {
    console.log(response)
    resp = response.data.data
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default VerifyEmailApi;