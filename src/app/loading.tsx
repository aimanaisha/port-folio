import "../../components/Loader/Loader.css";
export default function Loading () {
  return (
    <div className="center flex justify-center items-center">
      <h1 className="flex justify-center text-center items-center w-screen h-screen">
        <span className="glitch" data-text="PLEASE">
          WAIT.
        </span>
      </h1>
      <div className="bg-wrap">
        <div className="bg"></div>
      </div>
    </div>
  );
};

