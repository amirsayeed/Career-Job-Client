import React, { Suspense } from 'react';
import Loading from "../Shared/Loading";
import useAuth from '../../Hooks/useAuth';
import JobList from './JobList';
import useJobApi from '../../api/useJobApi';


const MyPostedJobs = () => {
    const {user} = useAuth();
    const { jobsCreatedByPromise } = useJobApi();
    
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