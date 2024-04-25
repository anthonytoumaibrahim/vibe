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
  const { width, top, left, z, marginTop, parts } = json;
  return (
    <>
      <SvgComponent
        width={width}
        style={{ top, left, marginTop, zIndex: z }}
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
              top,
              left,
              zIndex: z,
            }}
          />
        );
      })}
    </>
  );
};

export default Part;
