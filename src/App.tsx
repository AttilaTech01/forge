import "./App.css";
import SideBar from "./components/Navigation/SideBar";
import Route from "./components/Navigation/Route";
import ButtonPage from "./components/Buttons/ButtonPage";
import DropdownPage from "./components/Dropdowns/DropdownPage";
import HomePage from "./components/Home/HomePage";

function App() {
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
      </div>
    </div>
  );
}

export default App;
