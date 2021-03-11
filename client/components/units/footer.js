import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black py-8 px-0">
      <div className="w-full max-w-6xl flex flex-col md:flex-row text-white">
        <div className="flex items-start justify-around md:w-1/2">
          <div className="flex flex-col items-start m-4 text-left w-40 box-border">
            <h2 className="mb-4 text-lg">About Us</h2>
            <Link to="/login">How it works</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Feedback</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms&Conditions</Link>
          </div>
          <div className="flex flex-col items-start m-4 text-left w-40 box-border">
            <h2 className="mb-4 text-lg">Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Products</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="flex items-start justify-around md:w-1/2">
          <div className="flex flex-col items-start m-4 text-left w-40 box-border">
            <h2 className="mb-4 text-lg">Videos</h2>
            <Link to="/">All videos</Link>
            <Link to="/">Influence</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Terms&Conditions</Link>
          </div>
          <div className="flex flex-col items-start m-4 text-left w-40 box-border">
            <h2 className="mb-4 text-lg">Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="w-full text-white">
        <div className="flex flex-row justify-between items-center max-w-6xl w-11/12 mt-10 mx-auto">
          <div className="footer-logo">
            <Link
              to="/"
              className="cursor-pointer justify-self-start ml-5 text-4xl no-underline flex self-center mb-4"
            >
              CourseUP <i className="fas fa-laptop-code" />
            </Link>
          </div>
          <small className="mb-4">CourseUP &copy; 2021</small>
          <div className="flex justify-between items-center w-1/3 sm:text-2xl xl:text-3xl">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
              <i className="fab fa-youtube" />
            </Link>
            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
