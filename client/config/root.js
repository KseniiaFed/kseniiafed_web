/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Provider, useSelector } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect, StaticRouter } from 'react-router-dom'

import store, { history } from '../redux'

import Header from '../components/units/header'
import PrivateComponent from '../components/private-route'
import Footer from '../components/units/footer'
import About from '../components/about'
import AboutTeam from '../components/aboutteam'
import Training from '../components/training'
import Events from '../components/events'
import News from '../components/news'
import Home from '../components/home'
import NotFound from '../components/404'
import SignUp from '../components/signUp'
import SignIn from '../components/signIn'
import Contact from '../components/contact'
import TrainingInfo from '../components/trainingInfo'

import Startup from './startup'

const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
  const signInForm = useSelector((s) => s.signInForm)
  const func = (props) =>
    !!signInForm.user && !!signInForm.token ? (
      <Redirect to={{ pathname: '/private' }} />
    ) : (
      <Component {...props} />
    )
  return <Route {...rest} render={func} />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const signInForm = useSelector((s) => s.signInForm)
  const func = (props) =>
    !!signInForm.user && !!signInForm.token ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/sign-in' }} />
    )
  return <Route {...rest} render={func} />
}

const types = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  token: PropTypes.string
}

const defaults = {
  location: {
    pathname: ''
  },
  user: null,
  token: ''
}

OnlyAnonymousRoute.propTypes = types
PrivateRoute.propTypes = types

PrivateRoute.defaultProps = defaults
OnlyAnonymousRoute.defaultProps = defaults

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Startup>
          <Header />
          <div className="mt-20">
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/about" component={() => <About />} />
              <Route exact path="/aboutteam" component={() => <AboutTeam />} />
              <Route exact path="/training" component={() => <Training />} />
              <Route exact path="/events" component={() => <Events />} />
              <Route exact path="/news" component={() => <News />} />
              <OnlyAnonymousRoute exact path="/sign-in" component={() => <SignIn />} />
              <Route exact path="/sign-in/sign-up" component={() => <SignUp />} />
              <Route exact path="/contact" component={() => <Contact />} />
              <Route exact path="/training-info" component={() => <TrainingInfo />} />
              <PrivateRoute exact path="/private" component={() => <PrivateComponent />} />
              <Route component={() => <NotFound />} />
            </Switch>
          </div>
          <Footer />
        </Startup>
      </RouterSelector>
    </Provider>
  )
}

export default RootComponent
