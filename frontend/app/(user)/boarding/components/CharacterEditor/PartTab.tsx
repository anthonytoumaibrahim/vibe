import { useAppSelector } from "@/app/lib/store";
import Paginator from "./Paginator";

interface PartTabProps {
  type: string;
  parts: Array<any>;
  colors: Array<string>;
  is_premium?: boolean;
}

const PartTab = ({ type, parts, colors, is_premium = false }: PartTabProps) => {
  const selector = useAppSelector(
    (state) => state.characterEditorSlice?.[type]
  );
  return (
    <Paginator
      parts={parts}
      selector={selector}
      type={type}
      colors={colors}
      is_premium={is_premium}
    />
  );
};

export default PartTab;
