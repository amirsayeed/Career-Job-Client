import React, { use } from 'react';
import Loading from '../pages/Shared/Loading';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
const PrivateRoute = ({children}) => {
    // const navigate = useNavigate();
    const {user,loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading/>;
    }

    return (
        <div>
            {user ? children : <Navigate state={location.pathname} to='/signIn'/>}
        </div>
    );
};

export default PrivateRoute;