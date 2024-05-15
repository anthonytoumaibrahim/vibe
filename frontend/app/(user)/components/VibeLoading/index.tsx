import vibeLoadingAnimation from "./loading.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
