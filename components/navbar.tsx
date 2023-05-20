import Link from "next/link";

const Nav = () => {
    return ( <div className="hidden md:block bg-[#0A0E13] h-screen w-48  flex flex-col items-center">
        <div className="font-monoton text-7xl text-[#621AD7] h-44 border-b-2 border-[#444242] w-full justify-center flex items-center">
            <Link className="magic-hover magic-hover__square" href="/">A</Link>
        </div>

        <div className="font-fira text-[#7F7F7F] text-xl w-full  flex flex-col justify-evenly text-center ">
            <div className=" border-b-2 border-[#444242] h-24 flex items-center justify-center">
                <Link className=" magic-hover magic-hover__square" href="/about">&#60;About/&#62;</Link>
            </div>
            <div className=" border-b-2 border-[#444242] h-24 flex items-center justify-center">
                <Link className="magic-hover magic-hover__square" href="/skills">&#60;Skills/&#62;</Link>

                </div>
            <div className=" border-b-2 border-[#444242] h-24 flex items-center justify-center">
                <Link className="magic-hover magic-hover__square" href="/projects">&#60;Projects/&#62;</Link>
            </div>
            <div className=" border-b-2 border-[#444242] h-24 flex items-center justify-center">
                <Link className="magic-hover magic-hover__square" href="/contact">&#60;Contact/&#62;</Link>
            </div>
        </div>
    </div> );
}
 
export default Nav;