import React from 'react'

const Banner = () => {
  return (
    <section id="hero">
            {/* <!--Flex container--> */}
            <div class="container flex flex-col-reverse flex-end  md:flex-row items-center px-6 mx-auto mt-10 psace-y-0 md:space-y-0">
                {/* <!--Left Item--> */}
                <div class="flex flex-col mb-32 space-y-12  md:w-1/2 ">
                    
                    <h1 class="max-w-md text-4xl  font-bold text-left md:text-5xl md:text-left md:mb-12 md:pt-12">
                    <i class="md:mb-6">//life motto </i> <br /> <br />
                     function repeat &#40;&#41;  &#123; <br />
                     &nbsp;&nbsp;&nbsp;&nbsp;eat &#40;&#41;  <br />
                     &nbsp;&nbsp;&nbsp;&nbsp;sleep &#40;&#41;  <br />
                     &nbsp;&nbsp;&nbsp;&nbsp;code &#40;&#41; <br />
                     &nbsp;&nbsp;&nbsp;&nbsp;repeat &#40;&#41;  <br />
                    &#125;  
                    </h1>

                    <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Interested in collaborating or have a project in mind? Don't hesitate to get in touch with me! Use the contact form below to reach out, and let's discuss how we can work together to bring your ideas to life. I'm excited to hear from you and explore the possibilities of working together.
                    </p>

                    <div class="flex justify-center md:justify-start">
                        <a href="#contact-me" class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Contact Me</a>

                    </div>
                </div>
                {/* <!--Right Item--> */}
                <div class="md:w-1/2 mb-32 space-y-12">
                    <img  src="images/kindpng.png" alt=""/>
                    
                </div>

            </div>

        </section>
  )
}

export default Banner