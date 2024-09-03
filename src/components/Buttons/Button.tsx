export interface ButtonProps {
  test: string;
}

function Button({ test }: ButtonProps) {
  return <div>This is my button named {test}</div>;
}

export default Button;
