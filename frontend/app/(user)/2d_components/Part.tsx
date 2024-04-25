"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface PartProps {
  type: "body" | "eye" | "eyebrow" | "face" | "hair" | "mouth" | "nose";
  id: number;
  className?: string;
  absolute?: boolean;
  center?: boolean;
}

const Part = ({
  id,
  className = "",
  type,
  absolute = false,
  center = false,
}: PartProps) => {
  const filename = type + id;
  const SvgComponent = dynamic(() => import(`../2d/${type}/${filename}.svg`));

  const [json, setJson] = useState<Record<string, any>>({});

  const { width, height, parts, ...jsonData } = json;

  const loadJson = async () => {
    const json = await import(`../2d/${type}/${filename}.json`);
    setJson(json);
  };

  useEffect(() => {
    loadJson();
  }, [id]);

  return (
    <>
      <SvgComponent
        width={width}
        height={height}
        style={jsonData}
        className={`${absolute || center ? "absolute" : ""} ${
          center ? "left-1/2 -translate-x-1/2" : ""
        } ${className}`}
      />
      {parts?.map((part: Record<string, any>, index: number) => {
        const { width, center, postfix, ...jsonData } = part;
        const SubSvgComponent = dynamic(
          () => import(`../2d/${type}/${type + id}_${postfix}.svg`)
        );
        return (
          <SubSvgComponent
            key={index}
            width={width}
            style={jsonData}
            className={`${center ? "left-1/2 -translate-x-1/2" : ""}`}
          />
        );
      })}
    </>
  );
};

export default Part;
