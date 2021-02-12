import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="py-16 px-24 items-center justify-center space-y-4 text-center">
          <h1 className="text-2xl font-bold"> Hello World News / Blog </h1>
          <p className="text-gray-400"> Lorem inpsum dolor sit amet consectetur fldjbndshlkdfbdlfbfg  fjdgdlghlf</p>
        </div>
       
        <div className="relative flex flex-col px-16 pb-16 md:px-0 md:flex-row space-y-8 md:space-y-0 justify-evenly items-center">
          
          <div className="h-80 w-full md:w-2/7 rounded-lg shadow-lg">
              <div className="flex flex-col h-full w-full shadow-lg rounded-lg overflow-auto no-underline">
                <figure className="h-1/3 relative overflow-hidden">
                  <img
                    src="/images/img-biology.jpg"
                    alt="News info"
                    className="relative inset-0 block w-full max-w-full h-full max-h-full object-cover transition duration-200 ease-in-out hover:transform hover:scale-110"
                  />
                </figure>
                <div className="pt-5 pb-8 px-8 h-2/3 md:px-2 text-center bg-white">
                  <h5 className="text-gray-700 text-lg font-bold leading-6">  General words some text here</h5>
                  <Link to='/news' className="">
                    Find out more link to the News
                  </Link>
                </div>       
              </div>  
          </div>

          <div className="h-80 w-full md:w-2/7 rounded-lg shadow-lg">
          <div className="flex flex-col h-full w-full shadow-lg rounded-lg overflow-auto no-underline">
                <figure className="h-1/3 relative overflow-hidden">
                  <img
                    src="/images/img-infection.jpg"
                    alt="Latest news"
                    className="relative inset-0 block w-full max-w-full h-full max-h-full object-cover transition duration-200 ease-in-out hover:transform hover:scale-110"
                  />
                </figure>
                <div className="pt-5 pb-8 px-4 h-2/3 text-start bg-white">
                  <div>
                    <p className="text-indigo-500 text-xs">Blog</p>
                    <h3 className="text-black text-lg font-bold leading-6">
                      Latest news
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Should be carousel from news some text here blablabla fsdljfhdflgdlgghldkhggkdffgaldfndj
                    </p>
                  </div>                 
                  <Link to='/news' className="relative flex self-end">
                    Find out more link to the News
                  </Link>
                </div>       
              </div>
          </div>
          <div className="h-80 w-full md:w-2/7 rounded-lg shadow-lg">
            <div className="flex flex-col h-full w-full shadow-lg rounded-lg overflow-auto no-underline">
                <figure className="h-1/3 relative overflow-hidden">
                  <img
                    src="/images/img-child.jpg"
                    alt="Twitter news"
                    className="relative inset-0 block w-full max-w-full h-full max-h-full object-cover transition duration-200 ease-in-out hover:transform hover:scale-110"
                  />
                </figure>
                <div className="pt-5 pb-8 px-8 h-2/3 md:px-2 text-center bg-white">
                  <h5 className="text-gray-700 text-lg font-bold leading-6">  Twitter feed some text here</h5>
                  <Link to='/news' className="">
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
