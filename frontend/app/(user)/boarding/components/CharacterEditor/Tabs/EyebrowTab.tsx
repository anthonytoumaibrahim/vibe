import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import Paginator from "../Paginator";
import { TabProps } from "./BodyTab";

const EyebrowTab = ({ parts, colors }: TabProps) => {
  const eyebrowSelector = useAppSelector(
    (state) => state.characterEditorSlice.eyebrow
  );
  return (
    <Paginator
      parts={parts}
      selector={eyebrowSelector}
      type="eyebrow"
      colors={colors}
    />
  );
};

export default EyebrowTab;
