import React from 'react'
import ReactPlayer from 'react-player/lazy'

export default function Video({ url, onProgress }) {
  return (
    <div className="relative h-0 w-full pt-aspect">
      <ReactPlayer
        url={url}
        className="absolute top-0 left-0"
        controls
        onProgress={onProgress}
        height="100%"
        width="100%"
      />
    </div>
  )
}
