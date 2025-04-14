import Homescreen from "../components/screens/Homescreen"
import Loginscreen from "../components/screens/Loginscreen"
import ProductScreen from "../components/screens/ProductScreen"
import Signupscreen from "../components/screens/Signupscreen"


export const publicRoutes=[
    
{ index: true, element: <Homescreen /> },
{ path: "product/:id", element: <ProductScreen /> },
{ path: "login", element: <Loginscreen /> },
{ path: "signup", element: <Signupscreen /> },
]


