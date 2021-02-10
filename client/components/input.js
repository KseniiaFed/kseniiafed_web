import React, { useState, useEffect } from 'react'

const InitialValue = ''

const MyInput= (props) => {
  const { name } = props
  const sessionField = `input-experimental-${name}`
  const [val, changeVal] = useState(sessionStorage.getItem(sessionField) || InitialValue)
  const changeState = ({ target }) => {
    changeVal(target.value)
  }
  
  useEffect(() => {
    if (val !== InitialValue) {
      sessionStorage.setItem(sessionField, val)
    }
  }, [val, sessionField])

  return (
    <div className="border border-gray-500">
      <input className="border border-gray-500 max-w-4xl w-3/4 rounded-lg p-4" type="text" value={val} placeholder="start typing..." onChange={changeState} />
    </div>
  )

}


export default MyInput
