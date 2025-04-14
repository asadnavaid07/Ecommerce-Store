import {publicRoutes} from "../routes/publicroutes"
import {privateRoutes} from "../routes/privateroutes"
import Loginscreen from '../components/screens/Loginscreen';
import { createBrowserRouter } from "react-router-dom";
import App from "../App";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: publicRoutes
    },
    {
        path: "/",
        element: <Loginscreen />,
        children: privateRoutes
      }
  ]);


export default router;