import React, { useState, useEffect } from 'react'

const InitialValue = 'empty'

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
    <div>
      <input type="text" value={val} onChange={changeState} />
    </div>
  )

}


export default MyInput
