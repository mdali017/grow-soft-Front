import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import HomePageTwo from "../pages/HomePageTwo/HomePageTwo";
import HomePageThree from "../pages/HomePageThree/HomePageThree";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home-two",
        element: <HomePageTwo />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home-three",
        element: <HomePageThree />,
      },
    ],
  },
]);
