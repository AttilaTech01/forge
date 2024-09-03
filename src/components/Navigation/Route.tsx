import { ReactNode } from "react";
import useNavigation from "../../hooks/useNavigation";

// Define props type for the Route component
interface RouteProps {
  path: string;
  children: ReactNode;
}

function Route({ path, children }: RouteProps) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return <>{children}</>; // Ensuring children are rendered properly in JSX
  }

  return null;
}

export default Route;
