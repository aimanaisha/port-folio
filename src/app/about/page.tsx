import "animate.css";
import Download from "../../../components/Download";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-between">
      <div className="ml-56 w-3/5 flex flex-col mt-[10rem]">
        <div className="flex flex-col">
          <span className="text-[#35445A] font-caveat text-3xl">
            &#60;h1&#62;
          </span>
          <h1 className="animate__fadeInLeft animate__animated ml-10 font-audiowide text-[#7C86A3] text-6xl">
            <span className="font-fira">01.</span>KNOW ME
          </h1>
          <div className="ml-10 w-full m-5 h-[0.5px] bg-[#FBFBFB]"></div>
          <span className="align-end text-[#35445A] font-caveat text-3xl">
            &#60;/h1&#62;
          </span>
        </div>

        <div className="mt-10">
          <span className="align-end text-[#35445A] font-caveat text-3xl">
            &#60;p&#62;
          </span>
          <p className="animate__fadeInRight animate__animated ml-10 font-fira text-[#B8B6B6] text-xl">
            Hey there, fellow wanderer of the digital realm! I'm Aiman Aisha, a
            Computer Science undergrad from NIT Durgapur. My focus is primarily
            on front-end web development and UX/UI design. While I haven't
            mastered full-stack development just yet, I'm currently working
            towards it. Oh, and I dabble in Python and Machine Learning too,
            just for fun! I'm always itching to learn new tech stuff and get
            creative with coding. And when I'm not busy with work, you'll catch
            me jamming to music, buried in a good book, or just casually
            procrastinating like a pro ;)
          </p>
          <span className="align-end text-[#35445A] font-caveat text-3xl">
            &#60;/p&#62;
          </span>
        </div>

        
      </div>
      <div className="flex font-fira justify-center items-center mb-4">
      <span className="text-[#35445A] font-caveat text-3xl">
          &#60;h4&#62;
        </span>
        <p className="animate__pulse animate__infinite	infinite animate__slower animate__animated mx-10 text-[#621AD7] text-2xl"><Download/></p>
        <span className="text-[#35445A] font-caveat text-3xl">
          &#60;/h4&#62;
        </span>
      </div>
    </main>
  );
}
