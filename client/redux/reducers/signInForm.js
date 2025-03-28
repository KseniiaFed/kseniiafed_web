import Cookies from 'universal-cookie'
import { history } from '..'

const UPDATE_SIGNIN_FORM = 'UPDATE_SIGNIN_FORM'
const SIGNIN_FORM_SUBMITTED = 'SIGNIN_FORM_SUBMITTED'
const SIGNIN = 'SIGNIN'

const cookies = new Cookies()

const initialState = {
  email: '',
  password: '',
  token: cookies.get('token'),
  user: {},
  submitted: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGNIN_FORM: {
      return {
        ...state,
        email: action.values.email,
        password: action.values.password
      }
    }
    case SIGNIN: {
      return {
        ...state,
        token: action.token,
        password: '',
        user: action.user
      }
    }
    case SIGNIN_FORM_SUBMITTED: {
      return {
        ...state,
        submitted: action.submitted
      }
    }
    default:
      return state
  }
}

export function updateSignInForm(values) {
  return { type: UPDATE_SIGNIN_FORM, values }
}

export function submitSignInForm(submitted) {
  return { type: SIGNIN_FORM_SUBMITTED, submitted }
}

export function trySignIn() {
  return (dispatch) => {
    fetch('/api/v1/signInForm')
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: SIGNIN, token: data.token, user: data.user })
        history.push('/private')
      })
  }
}

export function tryGetUserInfo() {
  return () => {
    fetch('/api/v1/user-info')
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
      })
  }
}

export function signIn() {
  return (dispatch, getState) => {
    const { email, password } = getState().signInForm
    fetch('/api/v1/signInForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: SIGNIN, token: data.token, user: data.user })
        history.push('/private')
      })
  }
}
