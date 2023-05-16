import Github from '../../../public/assets/ss.png';
import Image from 'next/image'

const Project = () => {
  return (
    <div className="w-full flex items-center justify-center">

      <div className=" mr-32">
      <span className="self-end text-[#35445A] font-caveat text-3xl">&#60;img&#62;</span>
      <div className='w-[400px] h-[400px] opacity-60 rounded hover:opacity-100 transition my-5 ml-5 bg-green-800'>
      {/* <Image
      src={Github}
      alt=""
      style={{objectFit: "cover"}}
    /> */}
      </div>  
      <span className="self-end text-[#35445A] font-caveat text-3xl">&#60;/img&#62;</span>

      </div>

      <div className="border-4 bg-[#0A0E13] w-fit border-[#621AD7] flex flex-col items-center">
        <div className="flex flex-col py-8">
          <span className="text-[#35445A] font-caveat text-xl">&#60;h1&#62;</span>
          <h1 className="text-[#7C86A3] text-4xl font-audiowide">
            <span className="font-fira">03.</span> MY PROJECTS
          </h1>
          <span className="self-end text-[#35445A] font-caveat text-xl">&#60;/h1&#62;</span>
        </div>

        <div className=" w-[500px]">
            <div className="border-t text-lg border-[#621AD7] transition-all duration-300 text-[#621AD7] hover:text-[#0A0E13] flex justify-between font-fira py-8 px-5 hover:bg-[#621AD7]">
                <p className="text-[#F5F5F5]">01. Cherry //</p>
                <p className="">Social Media App</p>
            </div>
            <div className="border-t text-lg border-[#621AD7] transition-all duration-300 text-[#621AD7] hover:text-[#0A0E13] flex justify-between font-fira py-8 px-5 hover:bg-[#621AD7]">
                <p className="text-[#F5F5F5]">02. Ten Days of Code //</p>
                <p className="">Website</p>
            </div>
            <div className="border-t text-lg border-[#621AD7] transition-all duration-300 text-[#621AD7] hover:text-[#0A0E13] flex justify-between font-fira py-8 px-5 hover:bg-[#621AD7]">
                <p className="text-[#F5F5F5]">03. Digital Fortress //</p>
                <p className="">Quiz App</p>
            </div>
            <div className="border-t text-lg border-[#621AD7] transition-all duration-300 text-[#621AD7] hover:text-[#0A0E13] flex justify-between font-fira py-8 px-5 hover:bg-[#621AD7]">
                <p className="text-[#F5F5F5]">04. Aaroahn //</p>
                <p className="">Website</p>
            </div>
            <div className="border-t text-lg border-[#621AD7] transition-all duration-300 text-[#621AD7] hover:text-[#0A0E13] flex justify-between font-fira py-8 px-5 hover:bg-[#621AD7]">
                <p className="text-[#F5F5F5]">05. Music Player //</p>
                <p className="">Web App</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
