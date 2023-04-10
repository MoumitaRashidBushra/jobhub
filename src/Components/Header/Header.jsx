import React, { useEffect, useState } from 'react';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const Header = () => {

    const [jobCategorys, setJobCategory] = useState([])
    useEffect(() => {
        fetch('jobcategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])




    return (
        <div>
            <section>
                <div className=' bg-slate-100 mb-14'>
                    <div className='grid grid-cols-2  items-center gap-2 lg:gap-4 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12'>
                        <div>
                            <h1 className='text-2xl lg:text-7xl font-semibold text-black'>One Step <br /> Closer To Your <br /> <span className='text-indigo-600'>Dream Job</span></h1>
                            <p className='pt-2 lg:pt-6 pb-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <div className='pb-4'>
                                <a className="btn btn-info text-white ">Get Started</a>
                            </div>
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?w=740&t=st=1681058912~exp=1681059512~hmac=d654f83cfbb9cdbbf16ea1e0a7b190be257702308a1169f875bbd44ce2d1af2a" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='lg:container mx-auto px-5 lg:px-20 mb-10 '>
                    <div>
                        <h1 className='text-2xl lg:text-5xl text-center font-semibold'>Job Category List</h1>
                        <p className='text-center pt-1 lg:pt-3 pb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4'>
                        {
                            jobCategorys.map(jobCategory => <JobCategoryList
                                key={jobCategory}
                                jobCategory={jobCategory}
                            ></JobCategoryList>)

                        }

                    </div>

                </div>
            </section>

        </div>
    );
};

export default Header;