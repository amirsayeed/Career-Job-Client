import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import Loading from '../Shared/Loading';
import useAuth from '../../Hooks/useAuth';
import useApplicationApi from '../../api/useApplicationApi';

const MyApplications = () => {
    const {user} = useAuth();
    const {myApplicationsPromise} = useApplicationApi();
    
    return (
        <div>
            <ApplicationStats/>
            <Suspense fallback={<Loading/>}>
                <ApplicationList myApplicationsPromise = {myApplicationsPromise(user.email)}/>
            </Suspense>
        </div>
    );
};

export default MyApplications;