import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectNotAuthorized = () => {
    const user = useSelector((state) => state.user);
    const isLoggedIn = user.isLoggedIn;
    
    if ( !isLoggedIn ) {
        return <Navigate to="/" replace />
    }
    return <Outlet />;
    
};

export default ProtectNotAuthorized;

