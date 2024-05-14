import type { IconType } from "react-icons";
import { FaQuestion } from "react-icons/fa6";

interface StatisticProps {
  count: number;
  icon: IconType;
  children: React.ReactNode;
}

const Statistic = ({
  count,
  icon: StatIcon = FaQuestion,
  children,
}: StatisticProps) => {
  return (
    <div className="p-6 bg-white dark:bg-black rounded-lg shadow-lg flex items-center gap-10 overflow-hidden relative after:absolute after:w-24 after:h-44 after:rotate-45 after:-right-9 after:-bottom-16 after:bg-primary-main">
      <StatIcon size={54} className="fill-primary-main shrink-0" />
      <div>
        <h4>{children}</h4>
        <h1 className="text-primary-main">{count}</h1>
      </div>
    </div>
  );
};

export default Statistic;
