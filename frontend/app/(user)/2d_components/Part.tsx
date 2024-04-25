import dynamic from "next/dynamic";

interface PartProps {
  type: "body" | "eye" | "eyebrow" | "face" | "hair" | "mouth" | "nose";
  id: number;
  className?: string;
  center?: boolean;
}

const Part = async ({
  id,
  className = "",
  type,
  center = false,
}: PartProps) => {
  const SvgComponent = dynamic(() => import(`../2d/${type}/${type + id}.svg`));
  const json = await import(`../2d/${type}/${type + id}.json`);

  const { width, top } = json;
  return (
    <SvgComponent
      width={width}
      style={{ top: `${top}px` }}
      className={`${
        center ? "absolute left-1/2 -translate-x-1/2" : ""
      } ${className}`}
    />
  );
};

export default Part;
