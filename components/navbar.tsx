const Nav = () => {
    return ( <div className="bg-[#0A0E13] h-screen w-48 flex flex-col items-center">
        <div className="font-monoton text-7xl text-[#621AD7] h-44 border-b-2 border-[#444242] w-full justify-center flex items-center">
            A
        </div>

        <div className="font-fira text-[#7F7F7F] text-xl w-full  flex flex-col justify-evenly text-center ">
            <div className="border-b-2 border-[#444242] h-24 flex items-center justify-center">&#60;About/&#62;</div>
            <div className="border-b-2 border-[#444242] h-24 flex items-center justify-center">&#60;Skills/&#62;</div>
            <div className="border-b-2 border-[#444242] h-24 flex items-center justify-center">&#60;Projects/&#62;</div>
            <div className="border-b-2 border-[#444242] h-24 flex items-center justify-center">&#60;Contact/&#62;</div>
        </div>
    </div> );
}
 
export default Nav;