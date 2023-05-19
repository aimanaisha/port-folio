import TypedText from "../../../components/typed"
import 'animate.css'

const Home = () => {
    return(
        <main className="h-screen w-full font-fira flex justify-center items-center">
            <div className=" w-[780px] h-[450px] bg-[rgb(20,27,49,0.7)] rounded-lg border border-[#2E2F30]">
                <div className="rounded-t-lg  w-full h-10 bg-[#06080F] flex items-center">
                    <div className="flex ml-2">
                        <div className="h-5 w-5 mx-1 rounded-full bg-[#9207FF]"></div>
                        <div className="h-5 w-5 mx-1 rounded-full bg-[#B8B6B6]"></div>
                        <div className="h-5 w-5 mx-1 rounded-full bg-[#61D02D]"></div>
                    </div>
                    <h1 className="mx-auto text-[#9207FF]">a!man@portfolio:~</h1>               
                </div>
                <div className="m-7 text-2xl text-[#B8B6B6]">
                    <h1><span className="text-[#61D02D]">a!man@portfolio:~$ </span> <TypedText/> </h1>
                    <div className="mt-5 animate__fadeIn animate__animated animate__delay-2s animate__faster">
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
                </div>
            </div>
        </main>
    )
}
export default Home