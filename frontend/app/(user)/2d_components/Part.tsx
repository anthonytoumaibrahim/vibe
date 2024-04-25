import dynamic from "next/dynamic";

interface PartProps {
  type: "body" | "eye" | "eyebrow" | "face" | "hair" | "mouth" | "nose";
  id: number;
  className?: string;
  absolute?: boolean;
  center?: boolean;
}

const Part = async ({
  id,
  className = "",
  type,
  absolute = false,
  center = false,
}: PartProps) => {
  const SvgComponent = dynamic(() => import(`../2d/${type}/${type + id}.svg`));
  const json = await import(`../2d/${type}/${type + id}.json`);
  const { width, top, left, z, parts } = json;
  return (
    <>
      <SvgComponent
        width={width}
        style={{ top: `${top}px`, left: `${left}px`, zIndex: z }}
        className={`${absolute || center ? "absolute" : ""} ${
          center ? "left-1/2 -translate-x-1/2" : ""
        } ${className}`}
      />
      {parts?.map((part) => {
        const { width, position, left, top, z, postfix } = part;
        const SubSvgComponent = dynamic(
          () => import(`../2d/${type}/${type + id}_${postfix}.svg`)
        );
        return (
          <SubSvgComponent
            width={width}
            style={{
              position: position,
              top: `${top}px`,
              left: `${left}px`,
              zIndex: z,
            }}
          />
        );
      })}
    </>
  );
};

export default Part;
