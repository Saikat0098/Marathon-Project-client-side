import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Registerd from "../Pages/Registerd";
import Marathons from "../Pages/Marathons";
import Dashboard from "../Pages/Dashboard";
import MarathonDetailsPage from "../Components/MarathonDetailsPage";
import MarathonApplyForm from "../Pages/MarathonApplyForm";

const routs = createBrowserRouter([
    {
        path:'/' , 
        element:<MainLayOut></MainLayOut> , 
        children : [
            {
                path:'/' , 
                element:<Home></Home>
            } ,
            {
                path:'login' , 
                element: <Login></Login>
            } , 
            {
                path:'signUp',
                element:<Registerd></Registerd>
            } , 
            {
                path:'Marathons',
                element:<Marathons></Marathons> , 
                loader:() => fetch('http://localhost:5500/addMarathon')
            } , 
            {
                path:'marathonDetails/:id',
                element:<MarathonDetailsPage></MarathonDetailsPage> , 
                
                loader:() => fetch(`http://localhost:5500/addMarathon`)
            },
            {

                path:"marathonApplyForm" , 
                element:<MarathonApplyForm></MarathonApplyForm> , 
                loader:() => fetch(`http://localhost:5500/addMarathon`)

            } , 
            {
                path:'Dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    }
])

export default routs ; 