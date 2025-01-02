import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Registerd from "../Pages/Registerd";
import Marathons from "../Pages/Marathons";
import Dashboard from "../Pages/Dashboard";
import MarathonDetailsPage from "../Components/MarathonDetailsPage";
import MarathonApplyForm from "../Pages/MarathonApplyForm";
import NotFound from "../Pages/NotFound";
import PrivetRout from "./PrivetRout";

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
                loader:() => fetch('https://assignment11-server-side-six.vercel.app/addMarathon')
            } , 
            {
                path:'marathonDetails/:id',
                element: <PrivetRout>
                    <MarathonDetailsPage></MarathonDetailsPage> 
                </PrivetRout> , 
                
                loader:() => fetch(`https://assignment11-server-side-six.vercel.app/addMarathon`)
            },
            {

                path:"marathonApplyForm/:id" , 
                element:<MarathonApplyForm></MarathonApplyForm> , 
                loader:() => fetch(`https://assignment11-server-side-six.vercel.app/addMarathon`)

            } , 
            {
                path:'Dashboard',
                element:<Dashboard></Dashboard>
            } , 
            {
                path: '*' , 
                element : <NotFound></NotFound>
              } ,
        ]
    }
])

export default routs ; 