import "./App.css";


// importing pages/screens
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


import RootLayout from "./layouts/RootLayout";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>

      <Route index element={<Home/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="login" element={<Login/>}/>
      
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
