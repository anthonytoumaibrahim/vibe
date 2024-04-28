import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import Paginator from "../Paginator";

const EyeTab = () => {
  const eyeSelector = useAppSelector((state) => state.characterEditorSlice.eye);
  return (
    <Paginator
      parts={C2DParts.eye.parts}
      selector={eyeSelector}
      type="eye"
      colors={C2DParts.eye.colors}
    />
  );
};

export default EyeTab;
