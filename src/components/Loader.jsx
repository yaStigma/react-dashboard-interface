import { ThreeCircles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center  bg-opacity-50 z-50">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#3b82f6"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
