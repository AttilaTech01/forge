import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import useNavigation from "../../hooks/useNavigation";

// Define the props type for the Link component
interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

function Link({ to, children, className, activeClassName }: LinkProps) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

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
