import './page.css'
import 'animate.css'

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-between pt-20 pl-20 pb-4">
      <div>
      <div className="ml-10 ">
        <span className="text-[#35445A] font-caveat text-3xl">
          &#60;h1&#62;
        </span>
        <h1 className="text-7xl text-[#7C86A3] font-audiowide leading-relaxed">
          LET'S BUILD SOMETHING
          <br /> <span className="text-[#B8B6B6]">GREAT</span> TOGETHER :)
        </h1>
        <span className="text-[#35445A] font-caveat text-3xl">
          &#60;/h1&#62;
        </span>
      </div>
      <div className="flex mt-12 flex-row ml-10 font-fira text-[#B8B6B6]">
        
          <div className="animate__pulse animate__infinite	infinite animate__animated animate__slower border-4 mx-10 h-40 w-40 border-[#621AD7] rounded-full flex justify-center flex-col items-center hover:bg-[#621AD7] hover:text-[#0A0E13] transition ease-in">
            <h4> &#60; &#62; </h4>
            <h4> Instagram </h4>
            <h4> &#60;/&#62; </h4>
          </div>
          <div className="animate__pulse animate__infinite	infinite animate__animated animate__slower border-4 mx-10 mt-32 h-32 w-32 border-[#621AD7] rounded-full flex justify-center flex-col items-center hover:bg-[#621AD7] hover:text-[#0A0E13] transition ease-in">
     
            <h4> &#60; &#62; </h4>
            <h4> Facebook </h4>
            <h4> &#60;/&#62;</h4>
          </div>        
          <div className="animate__pulse animate__infinite	infinite animate__animated animate__slower border-4 mx-10 h-40 w-40 border-[#621AD7] rounded-full flex justify-center flex-col items-center hover:bg-[#621AD7] hover:text-[#0A0E13] transition ease-in">

            <h4> &#60; &#62;</h4>
            <h4> LinkedIn </h4>
            <h4> &#60;/&#62; </h4>
          </div>
          <div className="animate__pulse animate__infinite	infinite animate__animated animate__slower border-4 mx-10 mt-32 h-32 w-32 border-[#621AD7] rounded-full flex justify-center flex-col items-center hover:bg-[#621AD7] hover:text-[#0A0E13] transition ease-in">
            <h4> &#60; &#62;</h4>
            <h4> Gmail </h4>
            <h4> &#60;/&#62;</h4>
          
        </div>
      </div>
      </div>
      
      <div className="flex font-fira justify-center items-center">
      <span className="text-[#35445A] font-caveat text-3xl">
          &#60;footer&#62;
        </span>
        <p className="mx-10 text-[#621AD7] text-2xl">Made with &#60;3 by Aiman</p>
        <span className="text-[#35445A] font-caveat text-3xl">
          &#60;/footer&#62;
        </span>
      </div>
    </div>
  );
};
export default Contact;
