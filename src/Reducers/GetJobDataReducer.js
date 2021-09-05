const INITIAL_STATE = {
  jobDataArray: null,
  showApplication: false,
  totalCount: 0
}
const GetJobDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "getJobData":
      return {
        ...state,
        jobDataArray: action.payload
      };
    case "showApplications":
      return {
        ...state,
        showApplication: true
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
