import type { IconType } from "react-icons";
import { FaQuestion } from "react-icons/fa6";

interface StatisticProps {
  count: number;
  icon: IconType;
  children: React.ReactNode;
  accent: "primary" | "premium" | "sky" | "emerald";
}

const accentClass = {
  primary: {
    after: "after:bg-primary-main",
    icon: "fill-primary-main",
    text: "text-primary-main",
  },
  premium: {
    after: "after:bg-premium-600",
    icon: "fill-premium-600",
    text: "text-premium-600",
  },
  sky: {
    after: "after:bg-sky-600",
    icon: "fill-sky-600",
    text: "text-sky-600",
  },
  emerald: {
    after: "after:bg-emerald-600",
    icon: "fill-emerald-600",
    text: "text-emerald-600",
  },
};

const Statistic = ({
  count,
  icon: StatIcon = FaQuestion,
  children,
  accent = "primary",
}: StatisticProps) => {
  return (
    <div
      className={`p-6 bg-white dark:bg-black rounded-lg shadow-lg flex items-center gap-10 overflow-hidden relative after:absolute after:w-24 after:h-44 after:rotate-45 after:-right-9 after:-bottom-16 ${accentClass[accent].after}`}
    >
      <StatIcon size={54} className={`${accentClass[accent].icon} shrink-0`} />
      <div>
        <h4>{children}</h4>
        <h1 className={`${accentClass[accent].text}`}>{count}</h1>
      </div>
    </div>
  );
};

export default Statistic;
