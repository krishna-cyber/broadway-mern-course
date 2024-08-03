import { useContext } from "react";
import AuthContext from "../context/auth.context";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { UserRoles } from "./constants";
import { useSelector } from "react-redux";


export const CheckPermission = ({allowedBy,children}:{allowedBy:string,children:any})=>{
        // const {loggedInUser} : any = useContext(AuthContext);
        const {loggedInUser} = useSelector((state: any) => state.user);
    
        if(loggedInUser){
            if(loggedInUser?.role === allowedBy){
                return children;
            }else{
                toast.warn("You are not authorized to access this page");
                return <Navigate to={`/${loggedInUser.role}`} />
            }
        }else{
            toast.error("please login to access this page");

            return <Navigate to={"/login"} />
        }
}