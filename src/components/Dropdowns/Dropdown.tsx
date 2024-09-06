import { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import "./Dropdown.css";

export interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: Option[];
  value: Option | undefined;
  onChange: (option: Option) => void;
}

function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler as EventListener, true);

    return () => {
      document.removeEventListener("click", handler as EventListener);
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
    <div key={option.value} onClick={() => handleSelectOption(option)}>
      {option.label}
    </div>
  ));

  const content = value?.label || "Select...";
  const icon = <span>{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</span>;

  return (
    <div ref={divEl} className="parent">
      <div className="panel selector" onClick={handleToggleOpen}>
        {content}
        {icon}
      </div>
      {isOpen && <div className="panel options">{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
