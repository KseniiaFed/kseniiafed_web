import React from 'react'
import { Timeline } from 'react-twitter-widgets'
// import wave from '../assets/images/wave.jpg'

const NewsCard = () => {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden">
        <img alt="news preview" src="/" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-xl text-gray-900">News name</h3>
        <p className="text-gray-500 text-sm">Text preview</p>
        <span className="text-gray-400 text-xs">December 1, 2020</span>
      </div>
    </div>
  )
}

const News = (props) => {
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <div className="relative flex flex-col w-full">
        <div className="flex flex-col items-center p-12 space-y-4">
          <h1 className="text-4xl tracking-wider"> News and Blog </h1>
          <p> Lorem inpsum dolor sit amet consectetur </p>
        </div>
        <div>
          <div className="px-12 py-8 relative flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between">
            <span className="text-3xl">All</span>
            <div className="space-x-4">
              <button type="button" className="text-green-900">
                All
              </button>
              <span>/</span>
              <button type="button" className="text-green-900">
                Featured
              </button>
              <span>/</span>
              <button type="button" className="text-green-900">
                VCCN news
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div className="px-12 py-8 relative flex flex-col sm:flex-row justify-between">
            <div className="relative flex flex-col">
              News text
            </div>
            <div className="w-72 p-4 rounded-lg shadow-lg">
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'TwitterDev'
                }}
                options={{
                  height: '400'
                }}
              />
            </div>
          </div>
          
        </div>
        <div className="flex flex-row items-center justify-center p-4">
          <button type="button" className="focus:outline-none font-bold text-green-900">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  )
}

News.propTypes = {}

export default News
