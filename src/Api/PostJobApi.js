import axios from "axios";

const PostJobApi = async (token, title, description, location) => {
  var resp = null;
  const headers = {
    'Authorization': token
  }
  const data = {
    title : title,
    description : description,
    location : location
  }
  await axios.post('https://jobs-api.squareboat.info/api/v1/jobs', data, {
    headers: headers
  }).then((response) => {
    resp = response.data.data
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default PostJobApi;