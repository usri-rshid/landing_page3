//import React from 'react'
import aboutImage from "../assets/about_yr.webp"

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
    <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">about</h2>    
    <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
            <img src={aboutImage} alt="about " className="w-full h-auto"/>
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
    </section>
  )
}

export default About