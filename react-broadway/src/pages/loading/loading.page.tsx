import {  FallingLines } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <FallingLines color="#4fa94d" width="200" height="200" visible={true} />
      Loading ...
    </div>
  );
};

export default LoadingPage;
