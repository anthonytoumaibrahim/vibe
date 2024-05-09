import Lottie from "lottie-react";
import vibeLoadingAnimation from "./loading.json";

const VibeLoading = ({ size, rendererClassName = "" }) => {
  return (
    <Lottie
      animationData={vibeLoadingAnimation}
      loop={true}
      style={{ width: size, height: size }}
      rendererSettings={{
        className: rendererClassName,
        viewBoxOnly: true,
      }}
    />
  );
};

export default VibeLoading;
