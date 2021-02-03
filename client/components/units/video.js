import React from 'react'
import ReactPlayer from 'react-player/lazy'

export default function Video({url, onProgress}) {
  return (
    <div className="w-auto object-contain h-auto">
      <ReactPlayer
        url={url}
        className="relative object-contain top-0 left-0"
        controls
        onProgress={onProgress}
      />
    </div>
  )
}