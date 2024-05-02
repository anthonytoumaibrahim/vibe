import { useAppSelector } from "@/app/lib/hooks";

import Paginator from "../Paginator";
import { TabProps } from "./BodyTab";

const FaceTab = ({ parts }: TabProps) => {
  const faceSelector = useAppSelector(
    (state) => state.characterEditorSlice.face
  );
  return <Paginator parts={parts} selector={faceSelector} type="face" />;
};

export default FaceTab;
