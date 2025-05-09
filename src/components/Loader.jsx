import { ClipLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center  bg-opacity-50 z-50">
      <ClipLoader color="#3B82F6" size={50} />
    </div>
  );
}
