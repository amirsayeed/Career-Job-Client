import React, { use } from 'react';
import JobCard from '../Shared/JobCard/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div>
            <div className='text-center'>
                <h2 className="text-4xl font-bold">Hot Jobs of the day</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    jobs.map(job=><JobCard key={job._id} job={job}/>)
                }
            </div>
        </div>
    );
};

export default HotJobs;