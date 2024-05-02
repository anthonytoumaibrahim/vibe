import { useAppSelector } from "@/app/lib/hooks";

import Paginator from "../Paginator";
import { TabProps } from "./BodyTab";

const NoseTab = ({ parts }: TabProps) => {
  const noseSelector = useAppSelector(
    (state) => state.characterEditorSlice.nose
  );
  return <Paginator parts={parts} selector={noseSelector} type="nose" />;
};

export default NoseTab;
