import "animate.css";
import Download from "../../../components/Download";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col  md:justify-between">
      <div className="md:ml-56 md:w-3/5 flex flex-col md:mt-[10rem]">
        <div className="flex flex-col">
          <span className="text-[#35445A] font-caveat ml-5 md:ml-0 text-xs md:text-3xl">
            &#60;h1&#62;
          </span>
          <h1 className="animate__fadeInLeft animate__animated md:ml-10 font-audiowide text-center md:text-left text-[#7C86A3] text-3xl md:text-6xl">
            <span className="font-fira">01.</span>KNOW ME
          </h1>
          <div className="md:ml-10 md:w-full w-4/5 mt-5 mb-3 md:mb-5 md:m-5 h-[0.5px] mx-auto bg-[#FBFBFB]"></div>
          <span className="align-end text-[#35445A] font-caveat ml-5 md:ml-0 text-xs md:text-3xl">
            &#60;/h1&#62;
          </span>
        </div>

        <div className="md:mt-10">
          <span className="align-end text-[#35445A] font-caveat text-xs ml-5 md:ml-0 md:text-3xl">
            &#60;p&#62;
          </span>
          <p className="animate__fadeInRight text-center px-7 py-3 md:py-0 md:px-0 md:text-left animate__animated md:ml-10 font-fira text-[#B8B6B6] md:text-xl text-sm">
            Hey there, fellow visitor! I'm Aiman Aisha, a
            Computer Science undergrad from NIT Durgapur. My focus is primarily
            on front-end web development and UX/UI design. While I haven't
            mastered full-stack development just yet, I'm currently working
            towards it. Oh, and I dabble in Python and Machine Learning too,
            just for fun! I'm always itching to learn new tech stuff and get
            creative with coding. And when I'm not busy with work, you'll catch
            me jamming to music, buried in a good book, or just casually
            procrastinating like a pro ;)
          </p>
          <span className="align-end text-[#35445A] font-caveat ml-5 md:ml-0 text-xs md:text-3xl">
            &#60;/p&#62;
          </span>
        </div>

        
      </div>
      <div className="flex font-fira justify-center items-center md:mb-4">
      <span className="text-[#35445A] font-caveat text-xs md:text-3xl">
          &#60;h4&#62;
        </span>
        <p className="animate__pulse animate__infinite	infinite animate__slower animate__animated mx-5 md:mx-10 text-[#621AD7] text-base md:text-2xl"><Download/></p>
        <span className="text-[#35445A] font-caveat text-xs md:text-3xl">
          &#60;/h4&#62;
        </span>
      </div>
    </main>
  );
}
