import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoicemail, faMoneyBill, faPhone } from '@fortawesome/free-solid-svg-icons'

const ViewDetials = () => {
    const [jobs, setJobs] = useState({})
    const details = useLoaderData();
    const id = useParams();
    //console.log(id)



    useEffect(() => {
        if (details) {
            const storeData = details.find(dt => dt.id == id.id)
            setJobs(storeData);
        }
    }, [])

    const handleApply = (id) => {
        let cardItem = [];
        console.log(id)
        const preApply = localStorage.getItem('applyId');
        if (preApply) {
            cardItem = JSON.parse(preApply)
            let exist = cardItem.find(ct => ct === id);
            if (exist) {
                alert('already add');
            }
            else {
                cardItem.push(id);

            }
        }
        else {
            cardItem.push(id);
        }
        localStorage.setItem('applyId', JSON.stringify(cardItem));
    }

    //console.log(jobs)


    return (
        <div>
            <div className=' bg-slate-100 mb-14 '>
                <h1 className='text-2xl lg:text-5xl text-center font-semibold pt-10 '>Job Details</h1>
                <p className='text-center pt-1 lg:pt-3 pb-14'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-14 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12 mb-14'>
                <div className='col-span-3'>
                    <div>
                        <span className=' text-black font-bold'>Job Description:</span>{jobs.jobdescription}
                    </div>
                    <div className='pt-8 pb-8'>
                        <span className=' text-black font-bold'>Job Responsibility:</span> {jobs.jobresponsibility}
                    </div>
                    <div>
                        <p className='pb-5  text-black font-bold'>Educational Requirements:</p>
                        <p className='pb-5'>{jobs.requirements}</p>
                    </div>
                    <div>
                        <p className='pb-4  text-black font-bold'>Experiences:</p>
                        <p className='pb-10'>{jobs.experiences}</p>
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
                                <p className='pt-2 pb-5 '><span className='font-semibold'>Job Title :</span> {jobs.company}</p>
                                <h1 className=' pb-4 font-bold'>Contact Information</h1>
                                <hr />
                            </div>
                            <div>
                                <p className='pt-4 pb-2 '><span className='font-semibold'> <FontAwesomeIcon icon={faPhone} /> Phone :</span> {jobs.phone}</p>
                                <p className=' pb-2 '><span className='font-semibold'><FontAwesomeIcon icon={faVoicemail} /> Email : </span> {jobs.email}</p>
                                <p className=' pb-8 '><span className='font-semibold'>Address :</span> {jobs.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button onClick={() => handleApply(jobs.id)} className="btn  btn-wide btn-info text-white px-12">Apply Now</button>
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