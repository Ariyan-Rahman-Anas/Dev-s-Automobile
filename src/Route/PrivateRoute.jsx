import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
          <div className="flex items-center justify-center h-[80vh] ">
            <span className="loading loading-dots loading-md"></span>
          </div>
        );
    }

    if (user) {
        return children
  }
    else {
      toast("Please Login first ")
  }

  return (
    <div>
      <Navigate to={"/login"}></Navigate>
    </div>
  );
};
export default PrivateRoute;