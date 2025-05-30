import React from 'react';
import { useParams } from 'react-router';

const ViewApplications = () => {
    const {job_id} = useParams();
    return (
        <div>
            Applications for: {job_id}
        </div>
    );
};

export default ViewApplications;