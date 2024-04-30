import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import Paginator from "../Paginator";

const EyeglassesTab = () => {
  const eyeglassesSelector = useAppSelector(
    (state) => state.characterEditorSlice.eyeglasses
  );
  return (
    <Paginator
      parts={C2DParts.eyeglasses.parts}
      colors={C2DParts.eyeglasses.colors}
      selector={eyeglassesSelector}
      type="eyeglasses"
      optional={true}
    />
  );
};

export default EyeglassesTab;
