import { useAppSelector } from "@/app/lib/hooks";

import Paginator from "../Paginator";
import { TabProps } from "./BodyTab";

const MouthTab = ({ parts, colors }: TabProps) => {
  const mouthSelector = useAppSelector(
    (state) => state.characterEditorSlice.mouth
  );
  return (
    <Paginator
      parts={parts}
      selector={mouthSelector}
      type="mouth"
      colors={colors}
    />
  );
};

export default MouthTab;
