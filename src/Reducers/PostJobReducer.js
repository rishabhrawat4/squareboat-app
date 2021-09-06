const INITIAL_STATE = {
  jobTitle: "",
  description: "",
  location: "",
  hasFailedPostJob: false 
}
const PostJobReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "jobTitleInput":
      return {
        ...state,
        jobTitle: action.payload
      };
    case "descriptionInput":
      return {
        ...state,
        description: action.payload
      };
    case "locationInput": 
      return {
        ...state,
        location: action.payload
      };
    case "successPostJob": 
      return {
        ...state,
        hasFailedPostJob: false,
        jobTitle: "",
        description: "",
        location: "",
      };
    case "failurePostJob": 
      return {
        ...state,
        hasFailedPostJob: true
      }
    default: 
      return state;
  }
}

export default PostJobReducer;