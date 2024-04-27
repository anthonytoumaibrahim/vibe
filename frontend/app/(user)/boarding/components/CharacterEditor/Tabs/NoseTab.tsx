import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import Paginator from "../Paginator";

const NoseTab = () => {
  const noseSelector = useAppSelector(
    (state) => state.characterEditorSlice.nose
  );
  return (
    <Paginator parts={C2DParts.nose} selector={noseSelector.id} type="nose" />
  );
};

export default NoseTab;
