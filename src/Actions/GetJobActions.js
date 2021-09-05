export const getJobDataAction = (val) => {
  return {
    type: 'getJobData',
    payload: val
  }
}

export const showApplicationsAction = () => {
  return {
    type: 'showApplications',
  }
}

export const hideApplicationsAction = () => {
  return {
    type: 'hideApplications',
  }
}