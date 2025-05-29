import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({myApplicationsPromise}) => {
    const myApplications = use(myApplicationsPromise);
    console.log(myApplications);
    return (
        <div className='my-10'>
            <h3 className="text-4xl font-bold">Jobs Applied So Far: {myApplications.length}</h3>

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                     <tr>
                    <th>
                        #
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {
                    myApplications.map((application,index)=> <JobApplicationRow key={application._id} index={index} application={application}/>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ApplicationList;