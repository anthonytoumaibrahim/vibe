import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import Paginator from "../Paginator";

const EyebrowTab = () => {
  const eyebrowSelector = useAppSelector(
    (state) => state.characterEditorSlice.eyebrow
  );
  return (
    <Paginator
      parts={C2DParts.eyebrow}
      selector={eyebrowSelector.id}
      type="eyebrow"
    />
  );
};

export default EyebrowTab;
