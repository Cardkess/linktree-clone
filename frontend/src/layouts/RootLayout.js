import { Outlet } from "react-router-dom";
import Model from "../components/Model";
import ToggleButton from "../components/ToggleButton";

export default function RootLayout() {


  return (
    <div className="root-layout">

      
      <Model/>

      <div className="root-container">
        
        <nav className="nav-bar">
          <ToggleButton/>
        </nav>

        <main>
          <Outlet />
        </main>

        <footer className="app-footer"></footer>
      </div>
    </div>
  );
}
