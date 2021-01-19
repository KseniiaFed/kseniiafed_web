import React, { useState } from 'react'

const UserInfo = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <button type="button">
          Search user
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
      />
    </div>
  )
}

export default UserInfo