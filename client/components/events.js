import React, { useState, useEffect, useReducer } from 'react'

const initialState = {
  user1: {},
  user2: {}
}

const reducerFunc = (acc, rec) => {
  switch(rec.type) {
    case ('UPDATE USER'): {
      return { ...acc, [`user${rec.userIndex}`]: rec.user }
    }
    default:
      return acc
  }
}

const Events = (props) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState)

  const [userData, setUserData] = useState(initialState)
  useEffect(() => {
    setTimeout(() => {
      console.log(1000, userData)
      setUserData({ ...userData, user1: { name: 'Max' } })
      dispatch({ type: 'UPDATE_USER', userIndex: 1, user: { name: 'Max' } })
    }, 1000)

    setTimeout(() => {
      console.log(1200, userData)
      setUserData({ ...userData, user2: { name: 'Anoinette' } })
      // dispatch({ type: 'UPDATE_USER', userIndex: 2, user: { name: 'Elena' } })
    }, 5000)
  }, [state])
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <div>
        <div>
          1{state.user1.name}
          <button
            type="button"
            onClick={() => dispatch({ type: 'UPDATE_USER', userIndex: 2, user: { name: 'Elena' } })}
          >
            BUTTON
          </button>
        </div>
        <div>2{state.user2.name}</div>
        {console.log('reducer', state)}
      </div>
    </div>
  )
}


Events.propTypes = {}

export default Events
