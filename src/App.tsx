import "./App.css";
import SideBar from "./components/Navigation/SideBar";
import Route from "./components/Navigation/Route";
import ButtonPage from "./components/Buttons/ButtonPage";
import DropdownPage from "./components/Dropdowns/DropdownPage";
import ModalPage from "./components/Modals/ModalPage";
import HomePage from "./components/Home/HomePage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.overflow = "auto"; // Ensure scrolling is enabled globally
  }, []);

  return (
    <div className="main-container">
      <SideBar classname="sidebar-container" />
      <div className="components-container">
        <Route path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/button"}>
          <ButtonPage />
        </Route>
        <Route path={"/dropdown"}>
          <DropdownPage />
        </Route>
        <Route path={"/modal"}>
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
