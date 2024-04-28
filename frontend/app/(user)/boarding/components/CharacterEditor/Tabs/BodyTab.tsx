import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";
import Paginator from "../Paginator";

const BodyTab = () => {
  const bodySelector = useAppSelector(
    (state) => state.characterEditorSlice.body
  );
  return (
    <Paginator
      parts={C2DParts.body.parts}
      selector={bodySelector}
      type="body"
      colors={C2DParts.body.colors}
    />
  );
};

export default BodyTab;
