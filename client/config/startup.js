import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { trySignIn, tryGetUserInfo } from '../redux/reducers/signInForm'

const Startup = (props) => {
  const dispatch = useDispatch()
  const token = useSelector((s) => s.signInForm.token)
  useEffect(() => {
    if (token) {
      dispatch(trySignIn())
    }
    dispatch(tryGetUserInfo())
  }, [])

  return props.children
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup
