import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import { div, span } from 'motion/react-client';

const jobsPromise = fetch('http://localhost:5000/jobs').then(res=>res.json());
const Home = () => {
    return (
        <div>
          <Banner/> 
          <Suspense fallback= {<div className='flex justify-center my-2'>
            <span className="loading loading-bars loading-xl"></span>
          </div>}>
            <HotJobs jobsPromise ={jobsPromise}/>
          </Suspense>
        </div>
    );
};

export default Home;