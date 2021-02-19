import React, { useState } from 'react'
// import { createStore } from 'redux'
import NewInput from './input'
import UserInfo from './about'
import Header from './units/header'

const TodoList = (props) => {
  return (
    <ul>
      {props.items.map((it) => (
        <li key={it.id}>
          <input type="checkbox" />
          {it.text}
        </li>
      ))}
    </ul>
  )
}

const TodoApp = () => {
  const [state, setState] = useState({
    items: [],
    text: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.text.length === 0) {
      return
    }
    const newItem = {
      text: state.text,
      id: Date.now()
    }
    setState(() => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }

  const handleChange = (e) => {
    setState({ ...state, text: e.target.value })
  }

  return (
    <div className="bg-microscope">
      <Header />
      <UserInfo />
      <div className="p-5 bg-green-600">
        <p>TO DO LIST</p>
      </div>
      <div className="mt-1 relative rounded-md shadow-sm bg-green-200">
        <form onSubmit={handleSubmit}>
          <TodoList items={state.items} />
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            So, what needs to be done?..
          </label>
          <input
            type="text"
            name="new-todo"
            id="new-todo"
            placeholder="Start typing"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md placeholder-green-200"
            onChange={handleChange}
            value={state.text}
          />
          <br />
          <button type="button" onClick={handleSubmit}>
            ADD
          </button>
        </form>
      </div>
      <div className="p-20">
        <NewInput name="input1" />
      </div>
      <div className="p-20">
        <div>
          <NewInput name="input2" />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
