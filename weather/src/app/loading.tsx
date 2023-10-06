"use client";

import Lottie from "lottie-react";
import loadingLottie from "../../public/loading.json";

const Loading = () => {
  <div>
    <Lottie
      animationData={loadingLottie}
      autoPlay
      loop
    />
  </div>;
};

export default Loading;
