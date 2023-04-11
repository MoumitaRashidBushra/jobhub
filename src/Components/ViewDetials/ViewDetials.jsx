import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

const ViewDetials = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <div className=' bg-slate-100 mb-14 '>
                <h1 className='text-2xl lg:text-5xl text-center font-semibold pt-10 '>Job Details</h1>
                <p className='text-center pt-1 lg:pt-3 pb-14'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-14 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12 mb-14'>
                <div className='col-span-3'>
                    <div>
                        <span className=' text-black font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
                    </div>
                    <div className='pt-8 pb-8'>
                        <span className=' text-black font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </div>
                    <div>
                        <p className='pb-5  text-black font-bold'>Educational Requirements:</p>
                        <p className='pb-5'>Bachelor degree to complete any reputational university.</p>
                    </div>
                    <div>
                        <p className='pb-4  text-black font-bold'>Experiences:</p>
                        <p className='pb-10'>2-3 Years in this field.</p>
                    </div>
                </div>
                <div className='col-span-2 '>
                    <div className=' bg-slate-100 mb-5'>
                        <div className='px-10 pt-8'>
                            <div>
                                <h1 className=' pb-4 font-bold'>Job Details</h1>
                                <hr />
                            </div>
                            <div>
                                <h1 className='pt-4 font-bold'>Job Details</h1>
                                <p className='pt-2 pb-5 '><span className='font-semibold'>Job Title :</span> Product Designer</p>
                                <h1 className=' pb-4 font-bold'>Contact Information</h1>
                                <hr />
                            </div>
                            <div>
                                <p className='pt-4 pb-2 '><span className='font-semibold'>Phone :</span> 01750-00 00 00</p>
                                <p className=' pb-2 '><span className='font-semibold'>Email : </span> info@gmail.com</p>
                                <p className=' pb-8 '><span className='font-semibold'>Address :</span> Dhanmondi 32, Sukrabad
                                    Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className="btn no-animation btn-wide btn-info text-white px-12">Apply Now</button>
                    </div>

                </div>

            </div>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default ViewDetials;