import React from 'react';

const About = () => {
  return (
    <div name="about"
     className="w-full h-full bg-gradient-to-b from-gray-800 to-black
     text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
       justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4
            border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        I'am a self learned Front End Developer. I possess an impressive arsenal of skills in 
        HTML, CSS , JavaScript, Tailwind and React. I excel in desigining and maintaining 
        responisve websites that offer a smooth user experience.
        I am also a team player who thrives in  collabrating with cross-functional teams to 
        produce an outstanding web applications.
        </p>
        </div>
    </div>
  )
}

export default About;
