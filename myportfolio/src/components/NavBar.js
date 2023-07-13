import React from 'react'

const NavBar = () => {

    
  function hamburgerClick() {
    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
  }

  return (
    <nav class="relative container mx-auto p-6 ">

{/* <!--flex Container--> */}
<div class="flex items-center justify-between">
    {/* <!--logo--> */}
    <div className='flex flex-col md:text-left '>
      <h1 className='logo md:text-5xl text-4xl text-bold'>Thanish Ahamed</h1>
      {/* <h4 className='text-xl'>BSc(Hons) in Information Technology Specialized in Software Engineering (Reading)</h4> */}
      {/* <h3 className='text-darkGrayishBlue'>Nutmeg Your Problems</h3> */}
    </div>

    {/* <!--Menu--> */}
    <div class="hidden md:flex space-x-6 text-bold ">
      
        <a href="#about-me" class="hover:text-darkGrayishBlue">About Me</a>
        <a href="#technical-skills" class="hover:text-darkGrayishBlue">Technical Skills</a>
        <a href="#resume-container" class="hover:text-darkGrayishBlue">Resume</a>
        <a href="#other-skills" class="hover:text-darkGrayishBlue">Other Skills</a>
        <a href="#projects" class="hover:text-darkGrayishBlue">Projects</a>
        <a href="#certifications" class="hover:text-darkGrayishBlue">Certifications</a>
        <a href="#contact-me" class="hover:text-darkGrayishBlue">Contact Me</a>
    </div>

    {/* <!--Button--> */}
    <a href="#contact-me" class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Contact Me</a>

    {/* <!--Hamburger Icon--> */}
    <button onClick={hamburgerClick} id="menu-btn" class=" block hamburger md:hidden focus:outine-none">
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
    </button>
</div>

{/* <!--Mobile menu--> */}
<div class="md:hidden">
    <div id="menu" class="absolute  hidden flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
    <a href="#about-me" >About Me</a>
        <a href="#technical-skills" >Skills</a>
        <a href="#resume-container" >Resume</a>
        <a href="#projects">Projects</a>
        <a href="#other-skills">Other Skills</a>
        <a href="#certifications" >Certifications</a>
        <a href="#contact-me">Contact Me</a>
    </div>
</div>
</nav>
  )
}

export default NavBar