import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import Paginator from "../Paginator";

const EyeTab = () => {
  const eyeSelector = useAppSelector((state) => state.characterEditorSlice.eye);
  return (
    <Paginator parts={C2DParts.eye} selector={eyeSelector.id} type="eye" />
  );
};

export default EyeTab;
