import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoute = () => {
const token = localStorage.getItem('token')

if (!token) {
    return (
        <Navigate
        to={'/'}
        state={{msg: 'Unautorised user! Please login to access this page'}}
        />
    )
}

return (
    <Outlet />
)
}

export default ProtectedRoute;