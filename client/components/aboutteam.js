import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ name, position, linkedin, text, photo }) => {
  return (
    <div className="relative flex flex-col md:flex-row overflow-hidden">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <h3 className="pt-12 px-2 text-3xl text-center tracking-wider text-gray-900">{name}</h3>
        <h5 className="tracking-wide text-center text-gray-500">{position}</h5>
        <Link
          className="text-xl text-gray-500 mt-3"
          to={linkedin}
          target="_blank"
          aria-label="Linkedin"
        >
          <i className="fab fa-linkedin-in" />
        </Link>
        <hr className="w-2/3 mt-8 text-center text-gray-600" />
        <p className="pt-8 px-6 text-sm leading-6 text-center text-gray-500">{text}</p>
        <Link
          className="text-xl text-gray-500 mt-3 pb-16"
          to="/"
          target="_blank"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter" />
        </Link>
      </div>
      <img
        alt="team member"
        src={photo}
        className="team-image h-128 object-cover md:h-full w-full md:w-1/2"
      />
    </div>
  )
}

const AboutTeam = () => {
  return (
    <div>
      <div className="relative w-full pt-8 pb-28 flex flex-col justify-center items-center">
        <h1 className="pt-12 pb-28 text-center text-4xl tracking-wider text-gray-800">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-28">
          <TeamCard
            name="James Holden"
            position="Managing Director"
            linkedin=""
            photo="/images/team2.jpg"
            text="Adipisci velit, sed quia non numquam eius modi, ncidunt ut labore et dolore magnam adipisci velit, sed quia non numquam eius modi aliquam quaerat voluptatem."
          />
          <TeamCard
            name="Jules-Pierre Mao"
            position="Non-executive Director"
            linkedin=""
            photo="/images/team5.jpg"
            text="Dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et adipisci velit, sed quia non numquam eius modi dolore magnam aliquam quaerat voluptatem."
          />
          <TeamCard
            name="Camina Drummer"
            position="Accounting Assistant"
            linkedin=""
            photo="/images/team3.jpg"
            text="Modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
          <TeamCard
            name="Roberta Draper"
            position="Financial Controller"
            linkedin=""
            photo="/images/team4.jpg"
            text="dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
          <TeamCard
            name="Alex Kamal"
            position="Senior (and only) Developer"
            linkedin=""
            photo="/images/team1.jpg"
            text="dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
