import React from 'react'

const Resume = () => {

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Resume/Thanish Ahamed Resume.pdf';
    downloadLink.download = 'Thanish Ahamed Resume.pdf';
    downloadLink.click();
  };
  return (
    <section id="resume-container" class="bg-brightRed mt-0">
            
    <div class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:flex-row md:py-12 md:space-y-0" >
        

        <h2 class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Have a look at my <br /> Resume
        </h2>

        <div>
          <button onClick={handleDownload} class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl  baseline  hover:bg-veryDarkBlue">Download</button>
            {/* <a  href="#" class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl  baseline  hover:bg-veryDarkBlue">Download CV</a> */}
        </div>


    </div>

</section>
  )
}

export default Resume