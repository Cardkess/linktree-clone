import "./App.css";

// importing store
import store from "./store";
import { Provider } from "react-redux";

// importing pages/screens
import Home from "./pages/Home";
import Signup,  { singupAction } from "./pages/Signup";
import Login from "./pages/Login";

import RootLayout from "./layouts/RootLayout";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} action={singupAction} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
