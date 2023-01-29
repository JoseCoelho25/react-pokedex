import React from 'react'
import MainLayout from '../MainLayout/MainLayout';
import code from "../assets/imgs/code.png";
import chibi from "../assets/imgs/chibi.png";
import mail from "../assets/imgs/mail.png"

function ContactPage() {
  return (
    <MainLayout>
      <div className="text-white container mx-auto mt-32 px-4 lg:px-0 font-['Consolas'] ">
        <img src={code} alt="code" className="h-48" />
        <div className="text-2xl lg:text-4xl mb-10">This is a project i took from an exercise we made during my classes in FullStack Developer. The end goal is to create a netflix style site, using React library and tailwind for the CSS in this project.</div>
        <div className="flex">
          <div className="text-xl lg:text-2xl mb-10 pr-10">My name is José Coelho, im from Porto, Portugal. Im currently finishing a FullStack degree at Flag scholl, and im open for job offers!</div>
          <img src={chibi} alt="chibi" className="h-24 bg-white"/>
        </div>
        <div className="flex">
          <img src={mail} alt="mail" className="h-24 lg:h-16 my-8 lg:my-0" />
          <div className="text-xl lg:text-2xl pt-3 ml-5">If you need any information, or have any suggestions, you can contact me at <span className="text-red-700 underline decoration-red-700">zenani87@hotmail.com</span></div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ContactPage