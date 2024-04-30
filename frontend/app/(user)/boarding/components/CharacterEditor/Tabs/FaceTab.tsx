import { useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import Paginator from "../Paginator";

const FaceTab = () => {
  const faceSelector = useAppSelector(
    (state) => state.characterEditorSlice.face
  );
  return (
    <Paginator parts={C2DParts.face} selector={faceSelector} type="face" />
  );
};

export default FaceTab;
