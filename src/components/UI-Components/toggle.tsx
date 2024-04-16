import { Switch } from "@headlessui/react";
import { FC, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

interface ToggleProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  showModal?: () => void;
  disabled?: boolean;
}

const Toggle: FC<ToggleProps> = ({
  showModal,
  checked,
  onChange,
}) => {
  const { colorTheme } = useContext(ThemeContext);

  const handleToggler = (newChecked: boolean) => {
    onChange(newChecked);
    if (!checked && showModal) {
      showModal();
    }
  };

  return (
    <>
      <Switch
        checked={checked}
        onChange={handleToggler}
        className={`${
          checked ? "bg-gray-200" : colorTheme.primaryOrange
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="hidden">Toggle Theme</span>
        <span
          className={`${
            checked ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </>
  );
};

export default Toggle;
