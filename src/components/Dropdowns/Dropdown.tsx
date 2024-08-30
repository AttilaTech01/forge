export interface DropdownProps {
  test: string;
}

function Dropdown({ test }: DropdownProps) {
  return <div>This is my dropdown named {test}</div>;
}

export default Dropdown;
