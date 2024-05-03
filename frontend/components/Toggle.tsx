import { Switch } from "@headlessui/react";

interface ToggleProps {
  active?: boolean;
  onChange?: () => void;
  label?: string;
}

const Toggle = ({
  active = false,
  label = "",
  onChange = () => {},
}: ToggleProps) => {
  return (
    <Switch
      checked={active}
      onChange={onChange}
      className={`${
        active ? "bg-primary-main" : "bg-gray-200"
      } relative inline-flex h-5 w-10 items-center rounded-full`}
    >
      <span className="sr-only">{label}</span>
      <span
        className={`${
          active ? "translate-x-5" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default Toggle;
