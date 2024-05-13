import Image from "next/image";

interface FeatureProps {
  title: string;
  icon: any;
  readonly children: any;
}

const Feature = ({ title, children, icon }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <Image
        src={`/images/landing/features/${icon}`}
        width={80}
        height={80}
        className="w-auto h-auto aspect-square"
        alt=""
      />
      <h3 className="text-primary-main">{title}</h3>
      {children}
    </div>
  );
};

export default Feature;
