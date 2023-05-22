import Name from '../../components/Name'
import 'animate.css'
export default function Home() {



  return (
    <div className="w-full">
      
      <div className="font-audiowide h-full justify-center ml-10 flex flex-col">
        <span className="align-end text-[#35445A] font-caveat text-3xl">
          &#60;div&#62;
        </span>

        <div className="leading-none flex flex-col w-fit ml-10">
          <span className="align-end text-[#35445A] font-caveat text-3xl">
            &#60;h2&#62;
          </span>
          <h1 className="text-[5rem] text-[#7C86A3] ml-10 animate__fadeIn animate__animated">HELLO!</h1>
          <span className=" self-end text-[#35445A] font-caveat text-3xl relative left-10">
            &#60;/h2&#62;
          </span>
        </div>

        <div className="flex flex-col w-fit leading-[8rem] ml-10">
          <span className="align-end text-[#35445A] font-caveat text-3xl">
            &#60;h1&#62;
          </span>
          {/* <h1 className="text-[10rem] text-[#B8B6B6] ml-10">
            I AM <span className="text-[#621AD7] h-50 w-50 font-monoton text-[9rem]"><Name/></span> 
            
          </h1> */} <Name/>
          <span className="self-end text-[#35445A] font-caveat text-3xl relative left-10">
            &#60;/h1&#62;
          </span>
        </div>

        <div className="leading-none w-fit flex flex-col ml-10">
          <span className="align-end text-[#35445A] font-caveat text-3xl">
            &#60;h2&#62;
          </span>
          <h2 className="text-[6rem] text-[#B8B6B6] ml-10 animate__fadeIn animate__animated">
            I LIKE TO CREATE
          </h2>
          <span className="self-end text-[#35445A] font-caveat text-3xl relative left-10">
            &#60;/h2&#62;
          </span>
        </div>

        <div className="leading-none w-fit flex flex-col ml-10">
          <span className="align-end text-[#35445A] font-caveat text-3xl">
            &#60;h3&#62;
          </span>
          <h1 className="text-[3rem] text-[#7C86A3] ml-10 animate__fadeIn animate__animated">
            THINGS FOR THE WEB.
          </h1>
          <span className="self-end text-[#35445A] font-caveat text-3xl relative left-10">
            &#60;/h3&#62;
          </span>
        </div>
        <span className="align-end text-[#35445A] font-caveat text-3xl relative">
          &#60;/div&#62;
        </span>
      </div>
    </div>
  );
}
