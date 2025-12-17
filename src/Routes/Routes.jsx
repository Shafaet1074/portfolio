import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
          path: '/',
          element: <Home></Home>,
          // errorElement:<ErrorPage></ErrorPage>,
      }, 
    ]
  }
])