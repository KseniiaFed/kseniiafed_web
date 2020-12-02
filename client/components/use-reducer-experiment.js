import React, { useState } from 'react'
import axios from 'axios'
import NewInput from './input'


const url = 'https://randomuser.me/api'



const fetchData = () => {
  return axios.get(url)
  .then(res => {
    console.log(res)
    return JSON.stringify(res)
  })
  .catch(err => {
    console.log(err)
  })
}

const UseReducerExperiments = () => {
  const [dataJSON, setDataJSON] = useState('')
//   const [state, setState] = useState({
//     fields: {
//       input1: '',
//       input2: ''
//     }
//   })
  
const displayData = () => {
    fetchData().then((cb) => {
        setDataJSON(cb || '')  
      })
  }
  return (
    <div>
      <div className="p-5">
        <div><NewInput name="input1"/></div>
      </div>
      <div className="p-5">
        <div><NewInput name="input2"/></div>
      </div>
      <div className="p-5">
        <button type="button" onClick={displayData}>Show data</button>
      </div>
      <div>{dataJSON}</div>
      {/* {
        state.files.input1.length > 0
        && state.files.input2.length > 0
        && (
          <button type="button">Continue</button>
        )
      } */}
    </div>
  )

}

export default UseReducerExperiments
