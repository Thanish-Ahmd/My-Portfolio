import { useEffect, useState } from 'react';

const ProjectsMobile = () => {
    const [currentSlide , setCurrentSlide] = useState(0) ;
  function slideshow() {
    const slides = document.getElementsByClassName("mySlides") ;
    slides[currentSlide].classList.remove("hidden") ;
  }

  function changeSlideIncrease() {
    const slides = document.getElementsByClassName("mySlides") ;
    if (currentSlide == slides.length -1 ) {
        slides[currentSlide].classList.add("hidden") ;
        slides[0].classList.remove("hidden") ;
        setCurrentSlide(0) ;
    }else {
        slides[currentSlide].classList.add("hidden") ;
        slides[currentSlide+1].classList.remove("hidden") ;
        setCurrentSlide(currentSlide+1) ;

    }
    
  }

  function changeSlideDecrease() {
    const slides = document.getElementsByClassName("mySlides") ;

    if(currentSlide == 0) {
        slides[currentSlide].classList.add("hidden") ;
        slides[slides.length -1].classList.remove("hidden") ;
        setCurrentSlide(slides.length-1) ;
    }else {
        slides[currentSlide].classList.add("hidden") ;
        slides[currentSlide-1].classList.remove("hidden") ;
        setCurrentSlide(currentSlide-1) ;

    }
  }

useEffect(() => {
    slideshow() ;
},[]) ;
  return (
    <section id="projects" className='mb-16 md:hidden'>
           


            <div class="max-w-6xl px-5 mx-auto mt-32 text-center ">
                {/* <!--heading--> */}
                <h2 class="text-4xl font-bold text-center">Worked Projects</h2>

                <div class="flex  mt-24 flex-row md:space-x-6 justify-center" >

                    <div className='pt-36'>
                        <button className='text-4xl text-darkGrayishBlue font-bold' onClick={changeSlideDecrease}>&lt;</button>
                        {/* <a className='text-4xl text-darkGrayishBlue font-bold'>&lt;</a> */}
                    </div>
                
                    <div class="mySlides hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/4 w-3/4">
                        <img src="images/helpdesk.png" class="w-16 -mt-14  rounded-full" alt=""/>

                        <h5 class="text-lg font-bold">Online Help Desk</h5>
                        <p class="text-sm text-darkGrayishBlue">A Help Desk system was created as a project with a team of 3 individuals. Worked on this project by taking 
the lead. Languages such as HTML, CSS, and JavaScript were utilized to build the front end of the helpdesk 
while Java was utilized to build the back end of the system. The database was entirely managed using SQL 
where MySQL workbench was utilized to configure it. Object-oriented concepts and design patterns were 
used throughout.</p>
                    </div>

                    <div class="mySlides hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/4 w-3/4">
                        <img src="images/bus.png" class="w-16 -mt-14  rounded-full" alt=""/>

                        <h5 class="text-lg font-bold">Public Transport Reservation System</h5>
                        <p class="text-sm text-darkGrayishBlue">A bus reservation system was created from scratch using languages such as HTML, CSS, and JavaScript 
for the front end and PHP for the back end. The database for this system was entirely managed in 
Microsoft SQL Server Management Studio using SQL. Worked as the lead and completed the entire 
project within a short span of time by sticking to the deadline.</p>
                    </div>


                    <div class="mySlides hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/4 w-3/4">
                        <img src="images/doctor.webp" class="w-16 h-16 -mt-14 rounded-full" alt=""/>

                        <h5 class="text-lg font-bold">Dental Clinic Management System</h5>
                        <p class="text-sm text-darkGrayishBlue">A web application for a dental clinic was created from scratch for the 2nd year 2nd semester module. This 
application was created using MERN stack technology. This was a group project. I contributed to the 
project by developing the doctor management functionality completely. Got good experience on React 
Js, Node Js while developing the application.</p>
                    </div>

                    <div class="mySlides hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/4 w-3/4">
                        <img src="images/job.jpg" class="w-16 h-16 -mt-14  rounded-full" alt=""/>

                        <h5 class=" text-lg font-bold">Job Portal – Mobile App</h5>
                        <p class="text-sm text-darkGrayishBlue">A mobile app was created for the semester module assignment. This was a mobile app that supports 
companies to upload jobs in their organization and the common users can apply for these jobs. And at 
the same time users can post their freelance work. This app was created from scratch using Kotlin. For 
the database we used SQLite. I was the leader for this group project and led the team successfully and 
finished the project within the given deadline.</p>
                    </div>

                    <div className='pt-36'>
                        <button className='text-4xl text-darkGrayishBlue font-bold' onClick={changeSlideIncrease}>&gt;</button>
                        {/* <a onClick={changeSlideIncrease}  className='text-4xl text-darkGrayishBlue font-bold'>&gt;</a> */}
                    </div>
                </div>

                {/* <div class="my-16">
                    <a href="#" class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
                </div> */}
            </div>
        </section>
  )
}

export default ProjectsMobile