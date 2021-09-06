export const getJobDataAction = (val) => {
  return {
    type: 'getJobData',
    payload: val
  }
}

export const showApplicationsAction = (val) => {
  return {
    type: 'showApplications',
    payload: val
  }
}

export const hideApplicationsAction = () => {
  return {
    type: 'hideApplications',
  }
}

export const setTotalCountAction = (val) => {
  return {
    type: 'setTotalCount',
    payload: val
  }
}

export const errorJobDataAction = () => {
  return {
    type: 'errorJobData',
  }
}