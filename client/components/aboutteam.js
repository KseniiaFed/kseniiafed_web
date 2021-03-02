import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ name, position, linkedin, text }) => {
  return (
    <div className="relative flex flex-row border">
      <div className="border flex flex-col items-center w-1/2">
        <h3 className="mt-12 text-3xl tracking-wider text-gray-900">{name}</h3>
        <h5 className="tracking-wide text-gray-600">{position}</h5>
        <Link
          className="text-xl text-gray-600 mt-2"
          to={linkedin}
          target="_blank"
          aria-label="Linkedin"
        >
          <i className="fab fa-linkedin-in" />
        </Link>
        <hr className="w-2/3 mt-8 text-center text-gray-600" />
        <p className="pt-8 px-6 pb-16 text-center text-gray-600">{text}</p>
      </div>
      <div className="w-1/2 border">
        Photo
      </div>
    </div>
  )
}

const AboutTeam = () => {
  return (
    <div>
      <div className="relative w-full pt-8 pb-28">
        <h1 className="pt-12 pb-28 text-center text-4xl tracking-wider text-gray-800">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-28">
          <TeamCard
            name="Mark Ruane"
            position="DAD"
            linkedin=""
            photo=""
            text="ncidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
          <TeamCard
            name="Max Ruane"
            position="Baba"
            linkedin=""
            photo=""
            text="dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
          <TeamCard
            name="Ksenia Fedorova"
            position="Mommy"
            linkedin=""
            photo=""
            text="dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
          <TeamCard
            name="Jane Doe"
            position="SHE/Her"
            linkedin=""
            photo=""
            text="dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
          <TeamCard
            name="John Doe"
            position="He/him"
            linkedin=""
            photo=""
            text="dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
        </div>  
      </div>
    </div>
  )
}

export default AboutTeam
