import React from 'react';

const JobCategoryList = () => {
    return (
        <div className='lg:container lg:mx-auto px-5 lg:px-20 mb-10 '>
            <div>
                <h1 className='text-2xl lg:text-5xl text-center font-semibold'>Job Category List</h1>
                <p className='text-center pt-1 lg:pt-3 pb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="card w-96  bg-slate-100 ">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>300 Jobs Available</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default JobCategoryList;