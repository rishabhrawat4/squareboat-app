import axios from "axios";

const GetJobApi = async () => {
  var resp = null
  await axios.get('https://jobs-api.squareboat.info/api/v1/jobs').then((response) => {
    console.log(response)
    resp = response.data.data
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default GetJobApi;