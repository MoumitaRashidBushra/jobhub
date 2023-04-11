import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Apply = () => {
    return (
        <div>
            <div className=' bg-slate-100 mb-14 '>
                <h1 className='text-2xl lg:text-5xl text-center font-semibold pt-10 '>Applied Jobs</h1>
                <p className='text-center pt-1 lg:pt-3 pb-14'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>


            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12'>
                <div className='text-right '>
                    <div className='flex gap-6 justify-end mb-4  text-black'>
                        <div>
                            <button className="btn btn-outline btn-success">Remote</button>
                        </div>
                        <div>
                            <button className="btn btn-outline btn-success">Onsite</button>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1  items-center gap-6   border border-indigo-600'>
                    <div className='flex justify-between items-center'>

                        <div className='flex gap-1 items-center' >
                            <div className='p-4 '>
                                <img src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80" alt="Shoes" height="250" width="150" className='rounded-lg pt-5' />
                            </div>

                            <div className="p-4 lg:px-8">
                                <h2 className="">Technical Database Engineer
                                </h2>
                                <p>Google LLC</p>
                                <div className='flex gap-4 mt-4 mb-4'>
                                    <div className='border border-indigo-600 p-2 rounded-md'>
                                        Remote
                                    </div>
                                    <div className='border border-indigo-600 p-2  rounded-md'>
                                        Full time
                                    </div>
                                </div>
                                <div className='flex gap-14 mb-4'>
                                    <div>
                                        Dhaka, Bangladesh
                                    </div>
                                    <div>
                                        Salary : 100K - 150K
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div className='me-10'>

                            {/* <Link to={`/${id}`}><button className="btn btn-info  text-white"> View Details</button></Link> */}
                            <button className="btn btn-info  text-white"> View Details</button>
                        </div>



                    </div>
                </div>
            </div>

            <section className='mt-12 pt-10'>
                <Footer></Footer>
            </section>

        </div>
    );
};

export default Apply;