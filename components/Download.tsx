"use client"
import useDownloader from "react-use-downloader";

export default function Download() {
const { size, elapsed, percentage, download,
		cancel, error, isInProgress } =
	useDownloader();

	const downloadHandler = () => {
		console.log(1);
		download(fileUrl, filename)
	}

const fileUrl = "/assets/Aiman_Aisha_cv.pdf";
const filename = "resume.pdf";

return (

	<span onClick={downloadHandler}>
    Download My Resume
	</span>
);
}
