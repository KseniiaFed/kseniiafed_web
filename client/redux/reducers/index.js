import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import contactForm from './contactForm'
import events from './events'

const createRootReducer = (history) =>
  combineReducers({
    contactForm,
    events,
    router: connectRouter(history)
  })

export default createRootReducer
