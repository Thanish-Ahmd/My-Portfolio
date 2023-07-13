import React, { useState } from 'react' ;
import axios from "axios";

const ContactMe = () => {
    const [name , setName] = useState("") ;
    const [email ,setEmail] = useState("") ;
    const [phone , setPhone] =useState("") ;
    const [subject , setSubject] = useState("") ;

    const validatePhone = (tphone) => {
        // This regex pattern enforces that the phone number has 10 digits and starts with 0.
        const pattern = /^0\d{9}$/;
        return pattern.test(tphone);
      };

    function contact(e) {
        e.preventDefault() ;

        if(validatePhone(phone)) {

            const newApt = {
                name,
                email,
                phone,
                subject
            }
            
            axios.post("http://localhost:8070/contact/" , newApt).then((res)=>{
    
                      alert("Your message has been Sent") ;
                    }).catch( (err)=> {
                        alert(err) ;
                    }) 
        }else {
            alert("Invalid Phone Number") ;
        }

    }
  return (
    <>
        <section id='contact-me'>

<h1 className='text-4xl font-bold text-center md:text-5xl mb-24 mt-24'>Contact Details</h1>
<div className='container profile-container flex md:flex-row flex-col' >
    <div>
        <img className=' profile-img' src="images/profile.png" alt="" />

    </div>

    <div className='flex flex-col '>
        <div className='w-24'>
            <a href="https://www.instagram.com/t_h_a_n_i_s_h/" target="_blank">
                <div className='flex flex-row items-center hover:scale-110 transition-transform duration-300 '>
                <img className='md:ml-12 md:h-20 h-12 ml-6' src="images/instagram.png" alt="" />
                <p className='ml-4 py-1 px-6 mt-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight text-lg '>instagram.com/t_h_a_n_i_s_h/</p>

                </div>
            </a>
        </div>

        <div className='w-24'>
            <a href="https://web.facebook.com/thanish.ahamed.37/" target="_blank">
            <div className='flex flex-row items-center hover:scale-110 transition-transform duration-300'>
                <img className='md:ml-44 md:h-20 h-12 md:mt-2 mt-6 ml-6' src="images/facebook.png" alt="" />
                <p className='ml-4 py-1 px-6 mt-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight text-lg'>facebook.com/thanish.ahamed.37</p>

            </div>
            </a>
        </div>

        <div className='w-24'>
            <a href="https://twitter.com/T_h_a_n_i_s_h" target="_blank">
            <div className='flex flex-row items-center hover:scale-110 transition-transform duration-300'>
                <img className='md:ml-64 md:h-20 h-12 mt-6 ml-6' src="images/twitter.png" alt="" />
                <p className='ml-4 py-1 px-6 mt-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight text-lg'>twitter.com/T_h_a_n_i_s_h</p>

            </div>
            </a>
        </div>

        <div className='w-24'>
            <a href="https://api.whatsapp.com/send?phone=0776271771" target="_blank">
            <div className='flex flex-row items-center hover:scale-110 transition-transform duration-300'>
                <img className='md:ml-60 md:h-20 h-12 mt-6 ml-6' src="images/whatsapp.png" alt="" /> 
                <p className='ml-4 mt-6 py-1 px-6 mt-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight text-lg'>+94776271771</p>
            </div>
            </a>
        </div>

        <div className='w-24' >
            <a href="https://github.com/Thanish-Ahmd" target="_blank">
            <div className='flex flex-row items-center hover:scale-110 transition-transform duration-300'>
                <img className='md:h-20 h-12  md:ml-44 mt-6 ml-6' src="images/github-sign.png" alt="" />
                <p className='ml-4 py-1 px-6 mt-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight text-lg'>github.com/Thanish&#8209;Ahmd</p>
            </div>
            </a>
        </div>

        <div className='w-24' >
            <a href="mailto: thanishahamed321@gmail.com" target="_blank">
            <div className='flex flex-row items-center  hover:scale-110 transition-transform duration-300'>
                <img className='md:h-20  h-12 mt-6 md:ml-32 ml-6' src="images/gmail.png" alt="" />
                <p className='ml-4 py-1 px-6 mt-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight text-lg'>thanishahamed321@gmail.com</p>
            </div>
            </a>
        </div>

        <div className='w-24'>
            <a href="https://www.linkedin.com/in/thanish-ahamed555/" target="_blank">
                <div className='flex flex-row items-center hover:scale-110 transition-transform duration-300 md:mb-0 mb-6'>
                    <img className='md:h-20 h-12 mt-6 ml-6' src="images/linkedin.png" alt="" /> 
                    <p className='align-middle ml-4 mt-6 py-1 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight text-lg'>linkedin.com/in/thanish&#8209;ahamed555/</p>
            </div>
            </a>
        </div>
    </div>

</div>
</section>


        {/* <section id="cta" class="bg-brightRed">
            
            <div class="container flex flex-col items-center  px-6 py-24 mx-auto space-y-16 md:flex-col md:py-12 md:space-y-0" >
                
                <form action="" onSubmit={contact}>

                

                <div className='flex-col items-center mb-12'>   
                    <h2 class="text-5xl font-bold leading-tight text-center text-white md:text-4xl  ">Contact Me</h2>


                    <input type="text"  class="px-4 my-3 w-full h-12 rounded-full focus:outline-none" placeholder="Full Name" onChange={(e)=> {
                        setName(e.target.value) ;
                    }} required/>
                    <input type="email" class="px-4 my-3 w-full h-12 rounded-full focus:outline-none" placeholder="Email" onChange={(e)=>{
                        setEmail(e.target.value) ;
                    }} required />
                    <input id='phone' type="text" class="px-4 my-3 w-full h-12 rounded-full focus:outline-none" placeholder="Phone Eg 94771234567" onChange={(e)=>{
                        setPhone(e.target.value) ;
                    }} />
                    <textarea class="px-4 my-3 w-full h-24 rounded-lg focus:outline-none" name="" id="" cols="30" rows="5" placeholder='Subject' onChange={(e)=>{setSubject(e.target.value)}}></textarea>


                  

                </div>
                
                <div  className='items-center mt-12'>
                    <button type='submit' class="mt-3 p-3 px-6 pt-2 h-12 text-brightRed bg-white rounded-full shadow-2xl  baseline hover:bg-veryDarkBlue ">Contact Me</button>
                         <a href="#" class="mt-3 p-3 px-6 pt-2 h-12 text-brightRed bg-white rounded-full shadow-2xl  baseline hover:bg-veryDarkBlue ">Contact Me</a> 
                </div>

               

                </form>
            </div>

        </section> */}
    </>
  )
}

export default ContactMe