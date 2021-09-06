import axios from "axios";

const JobCandidatesApi = async (token, jobId) => {
  console.log(token, jobId)
  var resp = null
  const headers = {
    'Authorization': token
  }
  await axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobId}/candidates`, {
    headers: headers
  }).then((response) => {
    console.log(response)
    resp = response.data.data
  })
  .catch(err => {
    resp = null;
  })
  console.log('response here: ', resp)
  return resp;
} 

export default JobCandidatesApi;
