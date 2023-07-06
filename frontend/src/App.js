import "./App.css";

// importing store
import store from "./store/index";
import { Provider } from "react-redux";

// importing pages/screens
import Home, { linksLoader } from "./pages/Home";
import Signup,  { singupAction } from "./pages/Signup";
import Login, { loginAction } from "./pages/Login";

import RootLayout from "./layouts/RootLayout";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { addLinkAction } from "./components/AddLinkModel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout /> } action={addLinkAction}>
      <Route index element={<Home />} loader={linksLoader} />
      <Route path="signup" element={<Signup />} action={singupAction} />
      <Route path="login" element={<Login />} action={loginAction} />
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
