import './page.css'
import 'animate.css'
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-between pt-20 pl-20 pb-4">
      <div>
      <div className="ml-10 ">
        <span className="text-[#35445A] font-caveat text-3xl">
          &#60;h1&#62;
        </span>
        <h1 className=" text-7xl text-[#7C86A3] font-audiowide leading-relaxed ">
          <span className='animate__animated animate__fadeIn'>LET'S BUILD SOMETHING</span>
          <br /> <span className="animate__fadeInLeft animate__animated text-[#B8B6B6]">GREAT </span>
          <span className='animate__animated animate__fadeIn'>TOGETHER :) </span>
        </h1>
        <span className="text-[#35445A] font-caveat text-3xl">
          &#60;/h1&#62;
        </span>
      </div>
      <div className="flex mt-12 flex-row ml-10 font-fira text-[#B8B6B6]">

        
        
          <div className="circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-4 mx-10 h-40 w-40 border-[#621AD7] rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">
            <h4> &#60; &#62; </h4>
            <Link href="https://www.instagram.com/aimanaisha/" target='_blank'><h4> Instagram </h4></Link>
            <h4> &#60;/&#62; </h4>
          </div>
          <div className="circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-4 mx-10 mt-32 h-32 w-32 border-[#621AD7] rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">
     
            <h4> &#60; &#62; </h4> 
            <Link href="https://discordapp.com/users/Fireheart#4717" target='_blank'><h4>Discord</h4></Link>
            <h4> &#60;/&#62;</h4>
          </div>        
          <div className="circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-4 mx-10 h-40 w-40 border-[#621AD7] rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">

            <h4> &#60; &#62;</h4>
            <Link href="https://www.linkedin.com/in/aiman-aisha-84a932220/" target='_blank'> <h4> LinkedIn </h4></Link>
            <h4> &#60;/&#62; </h4>
          </div>
          <div className="circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-4 mx-10 mt-32 h-32 w-32 border-[#621AD7] rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">
            <h4> &#60; &#62;</h4>
            <Link href="mailto:aimanaisha851@gmail.com" target='_blank'> <h4> Gmail </h4></Link>
            <h4> &#60;/&#62;</h4>
          
        </div>
      </div>
      </div>
      
      <div className="flex font-fira justify-center items-center">
      <span className="text-[#35445A] font-caveat text-3xl">
          &#60;footer&#62;
        </span>
        <p className="animate__fadeInUp animate__animated mx-10 text-[#621AD7] text-2xl">Made with &#60;3 by Aiman</p>
        <span className="text-[#35445A] font-caveat text-3xl">
          &#60;/footer&#62;
        </span>
      </div>
    </div>
  );
};
export default Contact;
