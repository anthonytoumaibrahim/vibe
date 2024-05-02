import { useAppSelector } from "@/app/lib/hooks";

import Paginator from "../Paginator";
import { TabProps } from "./BodyTab";

const EyeTab = ({ parts, colors }: TabProps) => {
  const eyeSelector = useAppSelector((state) => state.characterEditorSlice.eye);
  return (
    <Paginator
      parts={parts}
      selector={eyeSelector}
      type="eye"
      colors={colors}
    />
  );
};

export default EyeTab;
