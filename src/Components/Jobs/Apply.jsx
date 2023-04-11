import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { JobContext } from '../Home/Home';
import SingleJob from '../SingleJob/SingleJob';

const Apply = () => {
    const jobData = useContext(JobContext);
    const [jobAdd, setJobAdd] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        let applyJob = [];
        let setJob = localStorage.getItem('applyId');
        if (setJob) {
            let jobId = JSON.parse(setJob);
            for (let id of jobId) {
                let exixt = jobData.find(jd => jd.id === id);
                applyJob.push(exixt);
            }
        }
        setJobAdd(applyJob);
        setFilter(applyJob);

    }, [])
    // setFilter(applyJob);
    const handelRemote = () => {
        let fillerJob = jobAdd.filter(jobs => jobs.remoteoronsite == "Remote")
        setFilter(fillerJob);
    }

    const handelOnsite = () => {
        let fillerJob = jobAdd.filter(jobs => jobs.remoteoronsite == "Onsite")
        setFilter(fillerJob);

    }

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
                            <button onClick={() => handelRemote()} className="btn btn-outline btn-success">Remote</button>
                        </div>
                        <div>
                            <button onClick={() => handelOnsite()} className="btn btn-outline btn-success">Onsite</button>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1  items-center gap-6   border border-indigo-600'>
                    {
                        filter.map(job => <SingleJob key={job.id}
                            job={job}
                        ></SingleJob>)

                    }
                </div>
            </div>

            <section className='mt-12 pt-10'>
                <Footer></Footer>
            </section>

        </div>
    );
};

export default Apply;