import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import Paginator from "../Paginator";

const MouthTab = () => {
  const mouthSelector = useAppSelector(
    (state) => state.characterEditorSlice.mouth
  );
  return (
    <Paginator
      parts={C2DParts.mouth}
      selector={mouthSelector.id}
      type="mouth"
    />
  );
};

export default MouthTab;
