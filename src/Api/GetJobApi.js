import axios from "axios";

const GetJobApi = async (pageNo) => {
  var resp = null
  await axios.get('https://jobs-api.squareboat.info/api/v1/jobs', {
    params : {
      page: pageNo
    }
  }).then((response) => {
    resp = {
      data: response.data.data,
      totalCount: response.data.metadata.count
    }
  })
  .catch(err => {
    resp = null;
  })
  return resp;
} 

export default GetJobApi;
