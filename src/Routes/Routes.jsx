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
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import MyEnrolledClassPlayer from "../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClassPlayer";
import SinglePayment from "../pages/Dashboard/Student/Payment/SinglePayment";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass/UpdateClass";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Instructors from "../pages/Instructors/Instructors";


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
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "admin/admin-home",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "admin/manage-classes",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: "admin/manage-users",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: "instructor/instructor-home",
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: "instructor/add-class",
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: "instructor/my-classes",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: "instructor/update-classes/:id",
                element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
                loader: ({ params }) => fetch(`https://server.udvabonibd.com/myClasses/${params.id}`)
            },
            {
                path: "student/student-home",
                element: <StudentHome></StudentHome>
            },
            {
                path: "student/my-selected-classes",
                element: <MySelected></MySelected>
            },
            {
                path: "student/payment",
                element: <Payment></Payment>
            },
            {
                path: "student/single-payment",
                element: <SinglePayment></SinglePayment>
            },
            {
                path: "student/payment-history",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "student/my-enrolled-classes",
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: "student/class-player",
                element: <MyEnrolledClassPlayer></MyEnrolledClassPlayer>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);