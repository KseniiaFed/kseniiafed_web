import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import contactForm from './contactForm'
import events from './events'
import training from './training'

const createRootReducer = (history) =>
  combineReducers({
    contactForm,
    events,
    training,
    router: connectRouter(history)
  })

export default createRootReducer
