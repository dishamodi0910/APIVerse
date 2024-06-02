import ReactLoading from "react-loading";
export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <ReactLoading type={"bars"} color={"white"} height={100} width={100} />
    </div>
  );
}
