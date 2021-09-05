const INITIAL_STATE = {
  jobDataArray: null,
  showApplication: false
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
    default: 
      return state;
  }
}

export default GetJobDataReducer;