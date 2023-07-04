import logo from "./logo.svg";
import "./App.css";

import {
  createBrowserRouter,
  Routes,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route index element={}/>
    </Routes>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
