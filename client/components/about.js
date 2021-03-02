import React from 'react'

const About = () => {
  return (
    <div>
      <div className="px-12 py-8 w-full flex flex-col space-y-12 justify-center tracking-wide">
        <div className="relative flex flex-col">
          <div className="text-4xl tracking-wider text-gray-800">
            <h1 className="p-6 self-center">About Us</h1>
          </div>
          <div className="text-gray-900 text-xl p-6 rounded-lg shadow-lg max-w-screen-lg">
            <p> Skillnet is set up by ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
          </div>
        </div>
        <div className="relative flex flex-col space-y-2">
          <h3 className="p-6 text-2xl text-gray-900">Infographics</h3>
          <div className="w-max border rounded-lg">
            <img alt="infographic" src="/images/infographics1.jpg" className="object-contain" />
          </div>
        </div>
        <div className="relative flex flex-col space-y-2">
          <h3 className="p-12 text-2xl text-gray-900">Testimonials</h3>
          <div className="p-10 text-gray-900 text-xl rounded-lg shadow-lg">
          1.CEO
          2.Board member
          3.Industry
          </div>
        </div>
      </div>
      <div className="relative flex flex-col space-y-2 bg-about-us bg-cover bg-center">
        <div className="bg-black bg-opacity-50 px-16 pt-16 pb-32">
          <h3 className="p-6 text-2xl text-white">Our mission</h3>
          <div className="p-6 text-white text-xl text-justify rounded-lg max-w-screen-lg">
            Mission + Vision
            <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
