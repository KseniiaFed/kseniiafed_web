const UPDATE_SIGNUP_FORM = 'UPDATE_SIGNUP_FORM'
const SIGNUP_FORM_SUBMITTED = 'SIGNUP_FORM_SUBMITTED'
const SIGNUP = 'SIGNUP'

const initialState = {
  first_name: '',
  last_name: '',
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
        first_name: action.values.firstName,
        last_name: action.values.lastName,
        email: action.values.email,
        password: action.values.password,
        passwordVerified: action.values.passwordVerified
      }
    }
    case SIGNUP: {
      return {
        ...state,
        user: action.user
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

export function signUp() {
  return (dispatch, getState) => {
    const { first_name, last_name, email, password } = getState().signInForm
    fetch('/api/v1/signUpForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password
      })
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: SIGNUP, user: data.user })
      })
  }
}