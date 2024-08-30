import { useContext } from "react";
import NavigationContext from "../contexts/navigation";

// Define a custom hook with a proper return type
function useNavigation() {
  const context = useContext(NavigationContext);

  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
}

export default useNavigation;
