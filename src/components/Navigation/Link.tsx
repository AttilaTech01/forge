import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import "./Link.css";
import useNavigation from "../../hooks/useNavigation";

interface LinkProps {
  to: string;
  children: ReactNode;
}

function Link({ to, children }: LinkProps) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(currentPath === to && "selected");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // If ctrl(Win) or meta(IOS) key is pressed, open in new tab
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
