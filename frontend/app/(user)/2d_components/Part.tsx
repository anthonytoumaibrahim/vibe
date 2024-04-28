"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";

interface PartProps {
  type:
    | "body"
    | "eye"
    | "eyeglasses"
    | "eyebrow"
    | "face"
    | "hair"
    | "beard"
    | "mouth"
    | "nose";
  id: number;
  className?: string;
  absolute?: boolean;
  center?: boolean;
  fill?: string | undefined;
}

const Part = ({
  id = 0,
  className = "",
  fill,
  type,
  absolute = false,
  center = false,
}: PartProps) => {
  const [json, setJson] = useState<Record<string, any>>({});

  const SvgComponent = useMemo(
    () =>
      id !== 0 ? dynamic(() => import(`../2d/${type}/${type + id}.svg`)) : null,
    [type, id]
  );

  const { width, height, parts, ...jsonData } = json;

  const loadJson = async () => {
    const json = await import(`../2d/${type}/${type + id}.json`);
    setJson(json);
  };

  useEffect(() => {
    if (id !== 0) {
      loadJson();
    }
  }, [id]);

  const subparts = useMemo(
    () =>
      parts?.map((part: Record<string, any>, index: number) => {
        const { width, center, postfix, ...jsonData } = part;
        const SubSvgComponent = dynamic(
          () => import(`../2d/${type}/${type + id}_${postfix}.svg`)
        );
        return (
          <SubSvgComponent
            key={index}
            width={width}
            style={jsonData}
            fill={fill}
            className={`${center ? "left-1/2 -translate-x-1/2" : ""}`}
          />
        );
      }),
    [parts, fill]
  );

  return (
    id !== 0 && (
      <>
        <SvgComponent
          width={width}
          height={height}
          style={jsonData}
          fill={fill}
          className={`${absolute || center ? "absolute" : ""} ${
            center ? "left-1/2 -translate-x-1/2" : ""
          } ${className}`}
        />
        {subparts}
      </>
    )
  );
};

export default Part;
