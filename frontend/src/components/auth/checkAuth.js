import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"

export const checkAuth = (Component) => {
    function Wrapper(props) {
        // var user = useSelector(store=>store.auth.user);
        var user = JSON.parse(localStorage.getItem('user'));
        var navigate = useNavigate();
        const location = useLocation();

        useEffect(() => {
            if (!user) {
                navigate('/login/You are not authenticated');
            } if (location.pathname === '/adminPanel' && user.role !== 'admin') {
                navigate('/401');
            }
        }, [user, navigate]);
        return <Component {...props} />
    }
    return Wrapper;
}

export default checkAuth;