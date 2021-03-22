import React from 'react'

const Private = () => {
  return (
    <div>
      <div>
        This is private component
      </div>
    </div>
  )
}

Private.propTypes = {}

export default React.memo(Private)
