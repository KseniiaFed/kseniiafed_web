import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import contactForm from './contactForm'
import events from './events'
import training from './training'
import signUpForm from './signUpForm'
import signInForm from './signInForm'

const createRootReducer = (history) =>
  combineReducers({
    contactForm,
    events,
    training,
    signUpForm,
    signInForm,
    router: connectRouter(history)
  })

export default createRootReducer
