import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import Loading from '../Shared/Loading';

const MyApplications = () => {
    return (
        <div>
            <ApplicationStats/>
            <Suspense fallback={<Loading/>}>
                <ApplicationList/>
            </Suspense>
        </div>
    );
};

export default MyApplications;