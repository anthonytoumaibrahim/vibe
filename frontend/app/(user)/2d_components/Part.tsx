import dynamic from "next/dynamic";

interface PartProps {
  type: "body" | "eye" | "eyebrow" | "face" | "hair" | "mouth" | "nose";
  name?: string | undefined;
  id: number;
  className?: string;
  absolute?: boolean;
  center?: boolean;
}

const Part = async ({
  id,
  className = "",
  name,
  type,
  absolute = false,
  center = false,
}: PartProps) => {
  const filename = name ? name + id : type + id;
  const SvgComponent = dynamic(() => import(`../2d/${type}/${filename}.svg`));
  const json = await import(`../2d/${type}/${filename}.json`);
  const { width, height, top, left, translateX, marginLeft, z, marginTop, parts } = json;
  return (
    <>
      <SvgComponent
        width={width}
        height={height}
        style={{ top, left, marginTop, translateX, marginLeft, zIndex: z }}
        className={`${absolute || center ? "absolute" : ""} ${
          center ? "left-1/2 -translate-x-1/2" : ""
        } ${className}`}
      />
      {parts?.map((part, index) => {
        const { width, position, center, left, marginLeft, top, z, postfix } = part;
        const SubSvgComponent = dynamic(
          () => import(`../2d/${type}/${type + id}_${postfix}.svg`)
        );
        return (
          <SubSvgComponent
            key={index}
            width={width}
            style={{
              position: position,
              top,
              left,
              marginLeft,
              zIndex: z,
            }}
            className={`${center ? "left-1/2 -translate-x-1/2" : ""}`}
          />
        );
      })}
    </>
  );
};

export default Part;
