import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-veryDarkBlue">
    {/* <!--Flex Container--> */}
    <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!--Logo and social links contaoner--> */}
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">

            <div class="md:mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2023 All Rights Rserved
            </div>
            {/* <!--logo--> */}
            <div>
                <h1 class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">Thanish Ahamed</h1>
                {/* <img src="img/logo-white.svg" class="h-8" alt=""/> */}
            </div>

            {/* <!--Social Link container--> */}
            <div class="flex justify-center space-x-4">
               {/* <!-- Link 1  --> */}
               <a href="https://web.facebook.com/thanish.ahamed.37/" target="_blank">
                <img src="./images/icon-facebook.svg" alt="" class="h-8"/>
               </a>
                {/* <!-- Link 2  --> */}
                <a href="https://www.linkedin.com/in/thanish-ahamed555/" target="_blank">
                    <img src="./images/linkedin-white.png" alt="" class="h-8"/>
                   </a>
                 {/* <!-- Link 3  --> */}
               <a href="https://twitter.com/T_h_a_n_i_s_h" target="_blank">
                <img src="./images/icon-twitter.svg" alt="" class="h-8"/>
               </a>
                {/* <!-- Link 4  --> */}
                <a href="https://github.com/Thanish-Ahmd" target="_blank">
                    <img src="./images/github-white.png" alt="" class="h-8"/>
                   </a>
                 {/* <!-- Link 5  --> */}
               <a href="https://www.instagram.com/t_h_a_n_i_s_h/" target="_blank">
                <img src="./images/icon-instagram.svg" alt="" class="h-8" />
               </a>
            </div>
        </div>

        {/* <!-- list container --> */}
        <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
                <a href="#about-me" class="hover:text-brightRed">About Me</a>
                <a href="#resume" class="hover:text-brightRed">Resume</a>
                <a href="#technical-skills" class="hover:text-brightRed">Skills</a>
                <a href="#other-skills" class="hover:text-brightRed">Other Skills</a>
                
            </div>

            <div class="flex flex-col space-y-3 text-white">
                <a href="#projects" class="hover:text-brightRed">Projects</a>
                <a href="#contact-me" class="hover:text-brightRed">Contact Me</a>
                <a href="#certifications" class="hover:text-brightRed">Certifications</a>
                
            </div>
        </div>

        {/* <!-- Input Container --> */}
        <div class="flex flex-col justify-between">
            {/* <form>
                <div class="flex space-x-3">
                    <input type="text" class="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox" />

                    <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
                </div>
            </form> */}
            <div class="hidden text-white md:block">
                Copyright &copy; 2023 All Rights Rserved
            </div>
        </div>

    </div>
</footer>
  )
}

export default Footer