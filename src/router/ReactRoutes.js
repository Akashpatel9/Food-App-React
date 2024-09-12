import { createBrowserRouter } from "react-router-dom"
import Error from "../components/errorComponents/Error.js"
import Home from "../components/mainComponents/Home.js"
import Offers from "../components/mainComponents/Offers.js"

import App from "../App.js"
import ResturentMenu from "../components/mainComponents/ResturentMenu.js"
import ResturentsExplore from "../components/mainComponents/ResturentsExplore.js"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/offers',
        element: <Offers />
      },
      {
        path:'/restorentMenu/:id',
        element:<ResturentMenu/>
      },{
        path:'/resturents-explore/',
        element:<ResturentsExplore/>
      }
    ],
    errorElement: <Error />
  },
  {

  }
])

export default router;