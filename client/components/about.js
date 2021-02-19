import React, { useState } from 'react'

const About = () => {
  const [value, setValue] = useState('')
  return (
    <div className="mt-20">
      <button type="button" className="mt-20">
        Search user
      </button>
      <br />
      <input
        type="text"
        className="rounded-lg border-2 border-gray-300"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default About
