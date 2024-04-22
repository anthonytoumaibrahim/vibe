import FeatureIcon from "./FeatureIcon";
import Image from "next/image";

interface FeatureProps {
  title: string;
  icon: any;
  readonly children: any;
}

const Feature = ({ title, children, icon }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <FeatureIcon>{icon}</FeatureIcon>
      <h3 className="font-bold text-primary-main">{title}</h3>
      {children}
    </div>
  );
};

export default Feature;
