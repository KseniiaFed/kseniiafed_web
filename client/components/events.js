import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUsername, getUserData } from '../redux/reducers/events'

const Events = (props) => {
  const name = useSelector((s) => s.events.name)
  const repoList = useSelector((s) => s.events.list)
  const dispatch = useDispatch()

  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <div>
        <div>
          Events here
          <br />
          <input
            type="text"
            className="border-black border-2"
            onChange={(e) => {
              dispatch(updateUsername(e.target.value))
            }}
            value={name}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(getUserData())
              }
            }}
          />
          <br />
          <button
            type="button"
            onClick={() => dispatch(getUserData())}
            className="p-4 bg-indigo-300 rounded-xl text-white"
          >
            Find User
          </button>
          <br />
          {repoList.map((it) => {
            return <div key="name">{it.name}</div>
          })}
        </div>
      </div>
    </div>
  )
}

Events.propTypes = {}

export default Events
