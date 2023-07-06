import "./App.css";

// importing store
import store from "./store/index";
import { Provider } from "react-redux";

// importing pages/screens
import Home, { linksLoader } from "./pages/Home";
import Signup,  { singupAction } from "./pages/Signup";
import Login, { loginAction } from "./pages/Login";
import AddLink, {addLinkAction } from "./pages/AddLink";

import RootLayout from "./layouts/RootLayout";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout /> }>
      <Route index element={<Home />} loader={linksLoader} />
      <Route path="signup" element={<Signup />} action={singupAction} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="add-link" element={<AddLink />} action={addLinkAction} />
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
