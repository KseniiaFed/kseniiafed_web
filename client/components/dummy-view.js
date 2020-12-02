import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
import Contact from './contact'


const Dummy = () => {
  const [text, setText] = useState('')
  const [clickLog, clickLogChange] = useState('')
  const [clickLog2, clickLogChange2] = useState('')
  const changeText = (e) => {
    setText(e.target.value)
  }
  // const onClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }
  return (
    <div>
      <Head title="Hello" />
      <div
        onClick={() => {
          clickLogChange(`parentDivClicked ${clickLog}`)
        }}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        Click me
        <div
          onClick={(e) => {
            e.stopPropagation()
            clickLogChange2(`myInnerDivClicked ${clickLog2}`)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          Click me2 GENTLY
        </div>
      </div>
      {clickLog}
      {clickLog2}
      <div><input type="checkbox" /></div>
      <div><input type="radio" /></div>
      _______{text}_______
      <div><input type="input" value={text} onChange={changeText} /></div>
      <div><input type="password" value={text} onChange={(e) => setText(e.target.value)}/></div>
      <Link to="/use-reducer-experiment">UseReducerExperiments</Link>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          This is Ksenia`s personal website. Hello!
        </div>
        <Contact title="Contact us"/>
      </div>
      <Link to="/dashboard">Go to Home</Link>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
