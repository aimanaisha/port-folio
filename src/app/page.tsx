import Name from "../../components/Name";
import "animate.css";
import bg from "../../public/assets/bg.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col h-screen">
      <Image src={bg} alt="" className="md:hidden fixed top-0 right-0 -z-10 opacity-30 w-[650px]" width={650}/>
      <Image src={bg} alt="" className="fixed md:hidden left-20 bottom-0 -z-10 opacity-30" width={650}/>

      <div className="font-audiowide leading-snug md:leading-normal h-full justify-center md:ml-10 flex flex-col">
        <span className="align-end text-[#35445A] font-caveat text-lg md:text-3xl">
          &#60;div&#62;
        </span>
        <div className="md:leading-none flex flex-col w-fit md:ml-10 ">
          <span className="align-end text-[#35445A] font-caveat text-xs md:text-3xl hidden md:block">
            &#60;h2&#62;
          </span>
          <h1 className="text-[3rem] md:text-[5rem] text-[#7C86A3] md:ml-10 animate__fadeIn animate__animated">
            HELLO!
          </h1>
          <span className=" self-end text-[#35445A] font-caveat text-xs md:text-3xl relative left-10 hidden md:block">
            &#60;/h2&#62;
          </span>
        </div>

        <div className="flex flex-col w-fit md:leading-[8rem] md:ml-10  md:m-0">
          <span className="align-end text-[#35445A] font-caveat text-xs md:text-3xl hidden md:block">
            &#60;h1&#62;
          </span>
          <Name />
          <span className="self-end text-[#35445A] font-caveat text-xs md:text-3xl relative left-10 hidden md:block">
            &#60;/h1&#62;
          </span>
        </div>
        <div className="leading-10 md:leading-none">
          <div className="md:leading-none w-fit flex flex-col md:ml-10">
            <span className="align-end text-[#35445A] font-caveat text-xs md:text-3xl hidden md:block">
              &#60;h2&#62;
            </span>
            <h2 className="text-[2rem] md:text-[6rem] text-[#B8B6B6] md:ml-10 animate__fadeIn animate__animated">
              I LIKE TO CREATE
            </h2>
            <span className="self-end text-[#35445A] font-caveat text-xs md:text-3xl relative md:left-10 hidden md:block">
              &#60;/h2&#62;
            </span>
          </div>

          <div className="md:leading-none w-fit flex flex-col md:ml-10">
            <span className="align-end text-[#35445A] font-caveat text-xs md:text-3xl hidden md:block">
              &#60;h3&#62;
            </span>
            <h1 className="text-[1.5rem] md:text-[3rem] text-[#7C86A3] md:ml-10 animate__fadeIn animate__animated">
              THINGS FOR THE WEB.
            </h1>
            <span className="self-end text-[#35445A] font-caveat text-xs md:text-3xl relative left-10 hidden md:block">
              &#60;/h3&#62;
            </span>
          </div>
        </div>

        <span className="align-end text-[#35445A] font-caveat text-lg md:text-3xl relative">
          &#60;/div&#62;
        </span>
      </div>
    </div>
  );
}
