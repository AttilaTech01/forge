import { createContext, useEffect, useState, ReactNode } from "react";

// Define a type for the context value
interface NavigationContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

// Create the context with a default value of undefined for both currentPath and navigate
const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

// Define props for the NavigationProvider component
interface NavigationProviderProps {
  children: ReactNode;
}

function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
