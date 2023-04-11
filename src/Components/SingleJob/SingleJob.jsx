import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {
    console.log(job)
    return (
        <div>
            <div className='flex justify-between items-center'>

                <div className='flex gap-1 items-center' >
                    <div className='p-4 '>
                        <img src={job.companylogo} alt="Shoes" height="250" width="150" className='rounded-lg pt-5' />
                    </div>

                    <div className="p-4 lg:px-8">
                        <h2 className="">{job.company}
                        </h2>
                        <p>Google LLC</p>
                        <div className='flex gap-4 mt-4 mb-4'>
                            <div className='border border-indigo-600 p-2 rounded-md'>
                                {job.remoteoronsite}
                            </div>
                            <div className='border border-indigo-600 p-2  rounded-md'>
                                {job.time}
                            </div>
                        </div>
                        <div className='flex gap-14 mb-4'>
                            <div>
                                {job.location}
                            </div>
                            <div>
                                Salary : {job.salary}
                            </div>

                        </div>

                    </div>
                </div>


                <div className='me-10'>

                    <Link to={`/job/${job.id}`}><button className="btn btn-info  text-white"> View Details</button></Link>
                    {/* <button className="btn btn-info  text-white"> View Details</button> */}
                </div>



            </div>
        </div>
    );
};

export default SingleJob;