import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
    const auth = Cookies.get('token');
    return (
        auth ? <Outlet /> : <Navigate to="/authmain" />
    )
}

export default PrivateRoutes