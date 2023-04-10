import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className=' bg-slate-100'>
            <div className='flex justify-between items-center flex-col  md:flex-row  lg:container lg:mx-auto  lg:px-20 lg:pt-8 '>
                <div>
                    <a className="btn btn-ghost normal-case text-2xl font-extrabold">JobHub</a>
                </div>

                <div >
                    <Link to='statistics' className='me-5'>Statistics</Link >
                    <Link to='job' className='me-5' >Applied Jobs</Link >
                    <Link to='blog' className='me-5'>Blog</Link >
                </div>

                <div>
                    <a className="btn btn-info  text-white">Star Applying</a>
                </div>



            </div>
        </div>
    );
};

export default Navber;