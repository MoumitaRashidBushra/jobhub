import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetials = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <div className=' bg-slate-100 mb-14 '>
                <h1 className='text-2xl lg:text-5xl text-center font-semibold pt-10 '>Job Details</h1>
                <p className='text-center pt-1 lg:pt-3 pb-14'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        </div>
    );
};

export default ViewDetials;