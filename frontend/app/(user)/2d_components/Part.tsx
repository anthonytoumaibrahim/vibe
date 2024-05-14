"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";

import type { PartsType } from "./Character";

interface PartProps {
  type: PartsType;
  id: number;
  className?: string;
  absolute?: boolean;
  center?: boolean;
  fill?: string | undefined;
  color?: string | undefined;
}

const Part = ({
  id = 0,
  className = "",
  fill,
  color,
  type,
  absolute = false,
  center = false,
}: PartProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [json, setJson] = useState<Record<string, any>>({});

  const SvgComponent: any = useMemo(
    () =>
      id !== 0 ? dynamic(() => import(`../2d/${type}/${type + id}.svg`)) : null,
    [type, id]
  );

  const { width, height, parts, ...jsonData } = json;

  const loadJson = async () => {
    const json = await import(`../2d/${type}/${type + id}.json`);
    setJson(json);
    setIsLoading(false);
  };

  useEffect(() => {
    setJson({});
    if (id !== 0) {
      loadJson();
    }
  }, [id]);

  const subparts = useMemo(
    () =>
      parts?.map((part: Record<string, any>, index: number) => {
        const { width, center, postfix, ...jsonData } = part;
        const SubSvgComponent: any = dynamic(
          () => import(`../2d/${type}/${type + id}_${postfix}.svg`)
        );
        return (
          <SubSvgComponent
            key={index}
            width={width}
            style={{ ...jsonData, color: color ? color : fill }}
            fill={fill}
            className={`${center ? "left-1/2 -translate-x-1/2" : ""}`}
          />
        );
      }),
    [parts, fill]
  );

  return (
    id !== 0 &&
    !isLoading && (
      <>
        <SvgComponent
          width={width}
          height={height}
          style={{ ...jsonData, color: color ? color : fill }}
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
