import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import Loading from '../Shared/Loading';
import { myApplicationsPromise } from '../../api/applicationsApi';
import useAuth from '../../Hooks/useAuth';

const MyApplications = () => {
    const {user} = useAuth();
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