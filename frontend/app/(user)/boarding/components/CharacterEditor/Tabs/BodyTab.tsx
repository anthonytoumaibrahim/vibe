import { useAppSelector } from "@/app/lib/hooks";

import Paginator from "../Paginator";

export interface TabProps {
  parts: Array<any>;
  colors: Array<string>;
}

const BodyTab = ({ parts, colors }: TabProps) => {
  const bodySelector = useAppSelector(
    (state) => state.characterEditorSlice.body
  );
  return (
    <Paginator
      parts={parts}
      selector={bodySelector}
      type="body"
      colors={colors}
    />
  );
};

export default BodyTab;
