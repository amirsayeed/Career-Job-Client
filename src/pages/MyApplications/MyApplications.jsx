import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import Loading from '../Shared/Loading';
import { myApplicationsPromise } from '../../api/applicationsApi';
import useAuth from '../../Hooks/useAuth';

const MyApplications = () => {
    const {user} = useAuth();
    //console.log(user.accessToken);
    return (
        <div>
            <ApplicationStats/>
            <Suspense fallback={<Loading/>}>
                <ApplicationList myApplicationsPromise = {myApplicationsPromise(user.email,user.accessToken)}/>
            </Suspense>
        </div>
    );
};

export default MyApplications;