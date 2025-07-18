import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { TokenPayload } from "../types";

const OnlyAdminRoute = () => {
    let authToken = localStorage.getItem('token');
        if (authToken === '') {
            return <Navigate to={'/'} />;
        }
        const decode = jwtDecode<TokenPayload>(localStorage.getItem('token') as string)
        if (decode.roles[0]) {
            switch (decode.roles[0]) {
                case "ROLE_ADMIN":
                    return <Outlet />
                    break;
                case "ROLE_SECRETAIRE":
                    return <Navigate to={'/reservation'} />
                    break;
                case "ROLE_EMPLOYE":
                    return <Navigate to={'/services'} />
                    break;
                default:
                    return <Navigate to={'/'} />
                    break;
            }
        }
        return <Navigate to={'/'} />;
}

export default OnlyAdminRoute