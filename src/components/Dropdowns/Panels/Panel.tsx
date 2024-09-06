import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./Panel.css";

// Define props type for the Panel component
interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isListItem?: boolean;
  isSelector?: boolean;
}

function Panel({ children, isListItem, isSelector, ...rest }: PanelProps) {
  const classes = classNames("panel", {
    selector: isSelector,
    "list-item": isListItem,
  });

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Panel;
