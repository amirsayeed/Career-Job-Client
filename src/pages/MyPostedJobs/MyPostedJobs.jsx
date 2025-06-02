import React, { Suspense } from 'react';
import Loading from "../Shared/Loading";
import useAuth from '../../Hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';


const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            My Posted Jobs So far:
            <Suspense fallback={<Loading/>}>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email, user.accessToken)}/>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;