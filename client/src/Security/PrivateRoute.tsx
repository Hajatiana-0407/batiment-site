import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthState } from "../Redux/Slice/AuthSlice";


const PrivateRoute = () => {
    const { token } = useSelector(getAuthState);
    let authToken: string = token;
    if (authToken === '') {
        authToken = localStorage.getItem('token') as string;
    }

    return authToken !== '' ? <Outlet /> : <Navigate to={'/'} />;
}

export default PrivateRoute