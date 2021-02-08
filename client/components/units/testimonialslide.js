import React from 'react'

// setInterval(function(){
//     const activeSlide = document.querySelector('.slide.translate-x-0');
//     activeSlide.classList.remove('translate-x-0');
//     activeSlide.classList.add('-translate-x-full');
    
//     const nextSlide = activeSlide.nextElementSibling;
//     nextSlide.classList.remove('translate-x-full');
//     nextSlide.classList.add('translate-x-0');
// }, 3000);

export default function TestimonialSlide({testimonialPic, testimonialName, testimonialTitle, testimonialText}) {
  return (
    <div className="relative rounded-lg max-w-md self-start lg:self-center md:max-w-screen-sm md:min-w-1/3 md:max-h-96 bg-white shadow-lg transition-all ease-in-out duration-1000 transform translate-x-0 slide">
      <div className="relative p-4 flex flex-row border-1 bg-gradient-to-b from-gray-800 items-center rounded-t-lg">
        <div className="items-center justify-center ml-2">
          <img 
            src={testimonialPic}
            alt="testimonials userpic"
            className="rounded-full h-16 w-16 flex items-center justify-center object-cover"
          />
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="text-lg text-white font-medium tracking-wider">{testimonialName}</h1>
          <h5 className="text-gray-500 text-sm font-semibold">{testimonialTitle}</h5>
        </div>
      </div>
      <div className="md:max-h-72 overflow-auto">
        <p className="px-6 py-5 text-gray-500 italic">
          <i className="fas fa-quote-left italic text-xs text-gray-300 mr-2 font-normal"/>
          {testimonialText}
          <i className="fas fa-quote-right italic text-xs text-gray-300 ml-2"/>
        </p>
      </div>
    </div>  
  )
}