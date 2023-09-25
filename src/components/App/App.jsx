import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './App.css'

import Main from "../Main/Main"
import FirstRoute from  "../FirstRoute/FirstRoute"
import SecondRoute from "../SecondRoute/SecondRoute"
import ThirdRoute from "../ThirdRoute/ThirdRoute"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/firstroute",
      element: <FirstRoute />,
    },
    {
      path: "/secondroute",
      element: <SecondRoute />,
    },
    {
      path: "/thirdroute",
      element: <ThirdRoute />,
    },
  ]);

  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
