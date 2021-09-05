import axios from "axios";

const RegisterApi = async (userRole, name, email, password, confirmPassword, skills) => {
  var resp = null;
  await axios.post('https://jobs-api.squareboat.info/api/v1/auth/register', {
      email: email,
      userRole: userRole,
      password:  password,
      confirmPassword: confirmPassword,
      name: name,
      skills: skills
  }).then((response) => {
    resp = response.data.data
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default RegisterApi;