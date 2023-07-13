import React from 'react'

const AboutMe = () => {
  return (
    <section id="about-me">
            {/* <!--flex container--> */}
            <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                {/* <!--Whats difference--> */}
                <div class="flex flex-col space-y-12 md:w-1/2 ">
                    <h2 class="max-w-md text-5xl font-bold text-center md:text-left">
                    Meet the person behind the screen.
                    </h2>

                    <p class="max-w--sm text-center text-darkGrayishBlue md:text-left md:mr-6">
                    Computer Science Student who is highly skilled and knowledgeable in coding and takes a great interest in solving 
problems using logical knowledge. Has a strong appetite to learn new things and is a team player who is willing to 
contribute to the success of the team even under pressure. A quick learner who has great expertise in SQL, Java and 
MERN technology.
                    </p>

                </div>

                {/* <!--numbered list--> */}
                <div class="flex flex-col space-y-8 md:w-1/2">
                    {/* <!--List Item 1--> */}

                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                       {/* <!--Heading-->   */}
                       <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">

                        <div class="flex items-center space-x-2">

                            <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">

                                01
                            </div>

                            <h3 class="text-base font-bold md:mb-4 md:hidden">
                                Education 
                            </h3>
                        </div>
                       </div>

                       <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block text-left">
                                Education 
                            </h3>
                            <p class="text-darkGrayishBlue text-left">
                                <ul className='list-disc'>
                                    <li className='list-disc'> <b>2021 - Present</b>  -Sri Lanka Institute of Information Technology
                                        BSc (Hons) in Information Technology specialized in Software Engineering  <b>Current GPA  3.73</b></li> 
                                    <li><b>2018 - 2020</b> -Kingswood College Kandy - Advanced Level &#8209; Physical Science 2B C
Chemistry &#8209; B | Physics &#8209; B | Mathematics &#8209; C</li>
                                    <li><b>2012 &#8209; 2017</b> -Ranabima royal College Kandy - Ordinary Level &#8209; 9A’s</li>
                                    <li><b>2017 &#8209;2011</b> -Gampola Zahira College
</li>

                                </ul>
                            </p>
                       </div>
                    </div>

                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* <!--Heading-->   */}
                        <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
 
                         <div class="flex items-center space-x-2">
 
                             <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
 
                                 02
                             </div>
 
                             <h3 class="text-base font-bold md:mb-4 md:hidden">
                                 Work Experience
                             </h3>
                         </div>
                        </div>
 
                        <div>
                             <h3 class="hidden mb-4 text-lg font-bold md:block text-left">
                                 Work Experience
                             </h3>
                             <p class="text-darkGrayishBlue text-left">
                                 <ul className='list-disc'>
                                    <li><b>Junior Web Developer</b> &#8209; Worked as a Junior web developer at <b>FlaminQo solutions</b> from 16th of January 2023 to 
                                        16th of April 2023</li>
                                    <li><b>Online Maths tutor</b> &#8209; Worked as an online maths tutor at <b>Third Space Global</b> from 1st of November 2022 to 31st of March 2023.</li>
                                 </ul>
                             </p>
                        </div>
                     </div>

                     
                </div>
            </div>
        </section>
  )
}

export default AboutMe