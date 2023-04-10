import React from 'react';

const JobCategoryList = ({ jobCategory }) => {
    const { id, categorylogo, categoryname, jobsavailable } = jobCategory;
    return (
        <div className="card w-full  bg-slate-100 ">
            <div className=''>
                <figure ><img src={categorylogo} alt="Shoes" height="250" width="150" className='rounded-lg pt-5' /></figure>
            </div>
            <div className="p-4 lg:px-8">
                <h2 className="card-title">{categoryname}
                </h2>
                <p>{jobsavailable} Jobs Available</p>
            </div>
        </div>
    );
};

export default JobCategoryList;