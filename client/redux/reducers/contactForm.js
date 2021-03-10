
const FORM_SUBMITTED = 'FORM_SUBMITTED'

const initialState = {
  submitted: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_SUBMITTED: {
      return {
        ...state,
        submitted: action.submitted
      }
    }
    default:
      return state
  }
}

export function submitForm(submitted) {
  return { type: FORM_SUBMITTED, submitted }
}
