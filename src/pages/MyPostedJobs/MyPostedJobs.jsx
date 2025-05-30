import React, { Suspense } from 'react';
import Loading from "../Shared/Loading";
import { jobsCreatedByPromise } from '../../api/jobsApi';
import JobList from './JobList/JobList';
import useAuth from '../../Hooks/useAuth';


const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            My Posted Jobs So far:
            <Suspense fallback={<Loading/>}>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}/>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;