
const UPDATE_SIGNUP_FORM = 'UPDATE_SIGNUP_FORM'
const SIGNUP_FORM_SUBMITTED = 'SIGNUP_FORM_SUBMITTED'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordVerified: '',
  submitted: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGNUP_FORM: {
      return {
        ...state,
        firstName: action.values.firstName,
        lastName: action.values.lastName,
        email: action.values.email,
        password: action.values.password,
        passwordVerified: action.values.passwordVerified
      }
    }
    case SIGNUP_FORM_SUBMITTED: {
      return {
        ...state,
        submitted: action.submitted
      }
    }
    default:
      return state
  }
}

export function updateSignUpForm(values) {
  return { type: UPDATE_SIGNUP_FORM, values }
}

export function submitSignUpForm(submitted) {
  return { type: SIGNUP_FORM_SUBMITTED, submitted }
}