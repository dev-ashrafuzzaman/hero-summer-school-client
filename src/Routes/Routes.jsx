import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Signup from "../pages/Signup/Signup";
import Classes from "../pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MySelected from "../pages/Dashboard/Student/MySekected/MySelected";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Student/Payment/PaymentHistory";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "classes",
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "my-selected-classes",
                element: <MySelected></MySelected>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "payment-history",
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);