import { Outlet } from "react-router-dom";


export default function RootLayout() {
  return (
    <div className="root-layout">
      <div className="root-container">
        <nav className="nav-bar">
          <div className="menu-toggle">
            <p>...</p>
          </div>
        </nav>

        <main>
          <Outlet />
        </main>

        <footer className="app-footer"></footer>
      </div>
    </div>
  );
}
