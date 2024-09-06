import { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panels/Panel";

// Define the type for each option
export interface Option {
  label: string;
  value: string | number;
}

// Define props type for the Dropdown component
interface DropdownProps {
  options: Option[];
  value: Option | null;
  onChange: (option: Option) => void;
}

function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null); // Specify the type for ref

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "click",
      handler as unknown as EventListener,
      true
    );

    return () => {
      document.removeEventListener(
        "click",
        handler as unknown as EventListener
      );
    };
  }, []);

  const handleToggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSelectOption = (option: Option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => (
    <div
      className="list-item"
      key={option.value}
      onClick={() => handleSelectOption(option)}
    >
      {option.label}
    </div>
  ));

  // eslint-disable-next-line prefer-const
  let content = value?.label || "Select...";
  // eslint-disable-next-line prefer-const
  let icon = (
    <span className="text-2xl">
      {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  );

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel isSelector onClick={handleToggleOpen}>
        {content}
        {icon}
      </Panel>
      {isOpen && <Panel>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
