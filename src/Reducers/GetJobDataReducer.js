const INITIAL_STATE = {
  jobDataArray: null,
  showApplication: false,
  totalCount: 0,
  jobId: null
}
const GetJobDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "getJobData":
      return {
        ...state,
        jobDataArray: action.payload.data,
        totalCount: action.payload.totalCount
      };
    case "errorJobData":
      return {
        ...state,
        jobDataArray: null,
        totalCount: 0
      };
    case "showApplications":
      return {
        ...state,
        showApplication: true,
        jobId: action.payload
      };
    case "hideApplications":
      return {
        ...state,
        showApplication: false
      };
    case "setTotalCount":
      return {
        ...state,
        totalCount: action.payload
      };
    default: 
      return state;
  }
}

export default GetJobDataReducer;
