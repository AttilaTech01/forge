import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavigationProvider } from "./contexts/navigation";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
