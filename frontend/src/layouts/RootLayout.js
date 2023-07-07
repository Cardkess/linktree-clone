import { Outlet } from "react-router-dom";
import Model from "../components/Model";
import ToggleButton from "../components/ToggleButton";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSettings } from "../store/settingsSlice";
import { useEffect } from "react";

export default function RootLayout() {
  const settings = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (settings !== null && typeof settings === "object" && settings.hasOwnProperty("backgroundColor")) {
      const elements = document.getElementsByClassName("root-layout");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = settings.backgroundColor;
      }
    }
  }, [settings]);

  useEffect(() => {
    dispatch(addSettings(settings));
  }, [dispatch, settings]);

  return (
    <div className="root-layout">
      <Model />

      <div className="root-container">
        <nav className="nav-bar">
          <ToggleButton />
        </nav>

        <main>
          <Outlet />
        </main>

        <footer className="app-footer"></footer>
      </div>
    </div>
  );
}

export const settingsLoader = async ({ request }) => {
  const url = process.env.REACT_APP_BACKEND_API_URL + "/settings";

  const res = await fetch(url);

  return res.json();
};
