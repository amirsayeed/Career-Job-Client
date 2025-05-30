import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({jobsCreatedByPromise}) => {
    const jobs = use(jobsCreatedByPromise);
    console.log(jobs);
    return (
        <div>
            <h3 className="text-xl">Jobs created by you: {jobs.length}</h3>
            <div>
                <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Job Deadline</th>
                        <th>View Applications</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        jobs.map((job,index)=><tr key={job._id}>
                        <th>{index+1}</th>
                        <td>{job.title}</td>
                        <td>{job.deadline}</td>
                        <td><Link to={`/applications/${job._id}`} className='btn'>View</Link></td>
                    </tr>)
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default JobList;