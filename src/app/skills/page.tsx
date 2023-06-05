import TypedText from '../../../components/typed';
import 'animate.css';
import './page.css';

const Home = () => {
  const strings = 'sudo echo $THINGS_I_KNOW';
  return (
    <main className="flex items-center justify-center w-full h-screen font-fira">
      <div className=" md:w-[780px] md:h-min w-full h-full md:bg-[rgb(20,27,49,0.7)] bg-[rgb(20,27,49,0.5)] rounded-lg border border-[#2E2F30]">
        <div className="rounded-t-lg  w-full h-12 md:h-10 bg-[#06080F] flex items-center">
          <div className="hidden ml-2 md:flex">
            <div className="h-3 w-3 md:h-5 md:w-5 mx-1 rounded-full bg-[#9207FF]"></div>
            <div className="h-3 w-3 md:h-5 md:w-5 mx-1 rounded-full bg-[#B8B6B6]"></div>
            <div className="h-3 w-3 md:h-5 md:w-5 mx-1 rounded-full bg-[#61D02D]"></div>
          </div>
          <h1 className="mx-auto text-sm md:text-base text-[#9207FF]">
            a!man@portfolio:~
          </h1>
        </div>
        <div className="m-5 md:m-7 text-lg md:text-2xl text-[#B8B6B6]">
          <h1>
            <span className="text-[#61D02D]">a!man@portfolio:~$ </span>{' '}
            <TypedText typeSpeed={50} strings={strings} showCursor={true} />{' '}
          </h1>
          <div className="mt-5 animate__fadeIn animate__animated animate__delay-2s animate__fast">
            <ul>
              <li>&#62; HTML</li>
              <li>&#62; CSS</li>
              <li>&#62; JavaScript</li>
              <li>&#62; NextJs</li>
              <li>&#62; Python</li>
              <li>&#62; Machine Learning</li>
              <li>&#62; Photoshop & Illustrator</li>
            </ul>
          </div>
          <div className="flex justify-center md:hidden absolute top-[90%]">
            <div className="h-5 w-5 mx-1 rounded-full bg-[#9207FF]"></div>
            <div className="h-5 w-5 mx-1 rounded-full bg-[#B8B6B6]"></div>
            <div className="h-5 w-5 mx-1 rounded-full bg-[#61D02D]"></div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
