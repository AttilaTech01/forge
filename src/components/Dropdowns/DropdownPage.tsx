//import { useState } from "react";
import Dropdown from "./Dropdown";

function DropdownPage() {
  /*
    const [selectedOption, setSelectedOption] = useState({ label: 'Default', value: 'default'});

    const handleSelect = (option: string) => {
        setSelectedOption(option);
    };

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'}
    ];

    */
  return (
    <div>
      <Dropdown test={'"First Component !"'} />
    </div>
  );
}

export default DropdownPage;
