import axios from "axios";

const RecruiterGetJobApi = async (token) => {
  var resp = null
  const headers = {
    'Authorization': token
  }
  await axios.get('https://jobs-api.squareboat.info/api/v1/recruiters/jobs', {
    headers: headers
  }).then((response) => {
    resp = {
      data: response.data.data.data,
      totalCount: response.data.data.metadata.count
    }
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default RecruiterGetJobApi;
