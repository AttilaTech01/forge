import { useState } from "react";
import Dropdown, { Option } from "./Dropdown";

function DropdownPage() {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>();

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <Dropdown
        options={options}
        value={selectedOption}
        onChange={handleSelect}
      />
    </div>
  );
}

export default DropdownPage;
