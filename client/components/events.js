import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUsername, getUserData } from '../redux/reducers/events'


const Events = (props) => {
  const courseList = useSelector((s) => s.training.courses)
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
        <div className="relative flex flex-col">
          <h1 className="text-4xl tracking-wider text-gray-800 p-12 self-center">
            Events you might like
          </h1>
          <div className="self-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-x-12 sm:gap-y-28">
            Events here
            {courseList.map((it, index) => {
              return <div key={index}>{it.title}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

Events.propTypes = {}

export default Events
