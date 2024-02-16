'use client';
import Lottie from "lottie-react";
import LoadingJson from "../../public/loading.json";

function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Lottie animationData={LoadingJson} loop={true} />
    </div>
  );
}

export default Loading;
