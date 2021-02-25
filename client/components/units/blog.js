import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="py-16 px-24 items-center justify-center space-y-4 text-center">
          <h1 className="text-2xl font-bold"> Hello World News / Blog </h1>
          <p className="text-gray-400">
            Lorem inpsum dolor sit amet consectetur fldjbndshlkdfbdlfbfg fjdgdlghlf
          </p>
        </div>
        <div className="relative flex flex-col px-16 pb-16 md:px-0 md:flex-row space-y-8 md:space-y-0 justify-evenly items-center">
          <div className="h-80 w-full md:w-2/7 rounded-lg">
            <div className="flex flex-col h-full w-full shadow-lg rounded-lg overflow-auto no-underline">
              <figure className="h-1/3 relative overflow-hidden">
                <img
                  src="/images/img-biology.jpg"
                  alt="News info"
                  className="relative inset-0 block w-full max-w-full h-full max-h-full object-cover transition duration-200 ease-in-out hover:transform hover:scale-110"
                />
              </figure>
              <div className="relative flex flex-col pt-5 pb-8 px-4 h-2/3 text-start bg-white">
                <p className="text-indigo-500 text-xs">News</p>
                <h3 className="mb-2 mt-1 text-black text-lg font-bold leading-6">General words</h3>
                <p className="text-gray-400 text-sm">
                  Should be carousel from news some text here blablabla
                  fsdljfhdflgdlgghldkhggkdffgaldfndj
                </p>
                <Link to="/news" className="absolute bottom-4">
                  Find out more link to the News
                </Link>
              </div>
            </div>
          </div>
          <div className="h-80 w-full md:w-2/7 rounded-lg">
            <div className="flex flex-col h-full w-full shadow-lg rounded-lg overflow-auto no-underline">
              <figure className="h-1/3 relative overflow-hidden">
                <img
                  src="/images/img-infection.jpg"
                  alt="Latest news"
                  className="relative inset-0 block w-full max-w-full h-full max-h-full object-cover transition duration-200 ease-in-out hover:transform hover:scale-110"
                />
              </figure>
              <div className="relative flex flex-col pt-5 pb-2 px-4 h-2/3 text-start bg-white">
                <div className="relative">
                  <p className="text-indigo-500 text-xs">Blog</p>
                  <h3 className="mb-2 mt-1 text-black text-lg font-bold leading-6">Latest news</h3>
                  <p className="text-gray-400 text-sm">
                    Should be carousel from news some text here blablabla
                    fsdljfhdflgdlgghldkhggkdffgaldfndj
                  </p>
                </div>
                <Link to="/news" className="absolute bottom-4">
                  Find out more link to the News
                </Link>
              </div>
            </div>
          </div>
          <div className="h-80 w-full md:w-2/7 rounded-lg">
            <div className="flex flex-col h-full w-full shadow-lg rounded-lg overflow-auto no-underline">
              <figure className="h-1/3 relative overflow-hidden">
                <img
                  src="/images/img-child.jpg"
                  alt="Twitter news"
                  className="relative inset-0 block w-full max-w-full h-full max-h-full object-cover transition duration-200 ease-in-out hover:transform hover:scale-110"
                />
              </figure>
              <div className="relative flex flex-col pt-5 pb-8 px-4 h-2/3 text-start bg-white">
                <p className="text-indigo-500 text-xs">Blog</p>
                <h3 className="mb-2 mt-1 text-black text-lg font-bold leading-6">Twitter feed</h3>
                <p className="text-gray-400 text-sm">
                  Should be carousel from news some text here blablabla
                  fsdljfhdflgdlgghldkhggkdffgaldfndj
                </p>
                <Link to="/news" className="absolute bottom-4">
                  Twitter link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
