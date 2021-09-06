import axios from "axios";

const JobCandidatesApi = async (token, jobId) => {
  var resp = null
  const headers = {
    'Authorization': token
  }
  await axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobId}/candidates`, {
    headers: headers
  }).then((response) => {
    resp = response.data.data
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default JobCandidatesApi;
