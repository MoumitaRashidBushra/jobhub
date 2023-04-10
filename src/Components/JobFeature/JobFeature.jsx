import React from 'react';

const JobFeature = ({ jobFeature }) => {
    const { id, companylogo, company, companyname, remoteoronsite, time, salary, location } = jobFeature;
    return (
        <div className="card w-full  bg-slate-100 ">
            <div className='p-4 lg:px-8'>
                <img src={companylogo} alt="Shoes" height="250" width="150" className='rounded-lg pt-5' />
            </div>
            <div className="p-4 lg:px-8">
                <h2 className="card-title">{company}
                </h2>
                <p>{companyname}</p>
                <div className='flex gap-4 mt-4 mb-4'>
                    <div className='border border-indigo-600 p-2 rounded-md'>
                        {remoteoronsite}
                    </div>
                    <div className='border border-indigo-600 p-2  rounded-md'>
                        {time}
                    </div>
                </div>
                <div className='flex gap-14 mb-4'>
                    <div>
                        {location}
                    </div>
                    <div>
                        {salary}
                    </div>

                </div>
                <div>
                    <a className="btn btn-info  text-white">View Details</a>
                </div>
            </div>
        </div>
    );
};

export default JobFeature;