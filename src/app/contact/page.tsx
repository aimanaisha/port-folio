import "./page.css";
import "animate.css";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full flex h-screen flex-col justify-center md:justify-between md:pt-24 md:pl-20 md:pb-4 pb-10">
      <div>
        <div className="md:ml-10 ">
          <span className="text-[#35445A] font-caveat ml-5 md:ml-0 text-xs md:text-3xl">
            &#60;h1&#62;
          </span>
          <h1 className="text-4xl md:text-7xl text-[#7C86A3] font-audiowide leading-relaxed md:leading-relaxed text-center md:text-left">
            <span className="animate__animated animate__fadeIn">
              LET&#39;S BUILD SOMETHING
            </span>
            <br />{" "}
            <span className="animate__fadeInLeft animate__animated text-[#B8B6B6]">
              GREAT{" "}
            </span>
            <span className="animate__animated animate__fadeIn">
              TOGETHER :){" "}
            </span>
          </h1>
          <span className="text-[#35445A] font-caveat ml-5 md:ml-0 text-xs md:text-3xl">
            &#60;/h1&#62;
          </span>
        </div>
        <div className="flex my-12 flex-row md:ml-10 font-fira text-[#B8B6B6] justify-center md:justify-start">
          <div className="circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-2 md:border-4 md:mx-10 md:h-40 md:w-40 h-20 w-20 border-[#621AD7] text-[10px] md:text-base rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">
            <h4> &#60; &#62; </h4>
            <Link href="https://www.instagram.com/aimanaisha/" target="_blank">
              <h4> Instagram </h4>
            </Link>
            <h4> &#60;/&#62; </h4>
          </div>
          <div className="circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-2 md:border-4 md:mx-10 mt-20 md:mt-32 md:h-32 md:w-32 h-20 w-20 border-[#621AD7] text-[10px] md:text-base rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">
            <h4> &#60; &#62; </h4>
            <Link
              href="https://discordapp.com/users/Fireheart#4717"
              target="_blank"
            >
              <h4>Discord</h4>
            </Link>
            <h4> &#60;/&#62;</h4>
          </div>
          <div className="circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-2 md:border-4 md:mx-10 md:h-40 md:w-40 h-20 w-20 border-[#621AD7] text-[10px] md:text-base rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">
            <h4> &#60; &#62;</h4>
            <Link
              href="https://www.linkedin.com/in/aiman-aisha-84a932220/"
              target="_blank"
            >
              {" "}
              <h4> LinkedIn </h4>
            </Link>
            <h4> &#60;/&#62; </h4>
          </div>
          <div className="circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-2 md:border-4 md:mx-10 mt-20 md:mt-32 md:h-32 md:w-32 h-20 w-20 border-[#621AD7] text-[10px] md:text-base rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">
            <h4> &#60; &#62;</h4>
            <Link href="mailto:aimanaisha851@gmail.com" target="_blank">
              {" "}
              <h4> Gmail </h4>
            </Link>
            <h4> &#60;/&#62;</h4>
          </div>
          {/* <div className="md:hidden circle animate__pulse animate__infinite	infinite animate__animated animate__slower border-2 md:border-4 md:mx-10 md:h-40 md:w-40 h-20 w-20 border-[#621AD7] text-[10px] md:text-base rounded-full flex justify-center flex-col items-center hover:text-[#0A0E13] ">
            <h4> &#60; &#62;</h4>
            <Link
              href="https://www.linkedin.com/in/aiman-aisha-84a932220/"
              target="_blank"
            >
              {" "}
              <h4> LinkedIn </h4>
            </Link>
            <h4> &#60;/&#62; </h4>
          </div> */}
        </div>
      </div>

      <div className="flex font-fira justify-center items-center">
        <span className="text-[#35445A] font-caveat text-xs md:text-3xl">
          &#60;footer&#62;
        </span>
        <p className="animate__fadeInUp animate__animated mx-5 md:mx-10 text-[#621AD7] text-base md:text-2xl">
          Made with &#60;3 by Aiman
        </p>
        <span className="text-[#35445A] font-caveat text-xs md:text-3xl">
          &#60;/footer&#62;
        </span>
      </div>
    </div>
  );
};
export default Contact;
