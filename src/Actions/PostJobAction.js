export const jobTitleInputAction = (val) => {
  return {
    type: 'jobTitleInput',
    payload: val
  }
}

export const descriptionInputAction = (val) => {
  return {
    type: "descriptionInput",
    payload: val
  }
};


export const locationInputAction = (val) => {
  return {
    type: "locationInput",
    payload: val
  }
};

export const successPostJobAction = () => {
  return {
    type: 'successPostJob'
  }
}

export const failurePostJobAction = () => {
  return {
    type: 'failurePostJob'
  }
}
