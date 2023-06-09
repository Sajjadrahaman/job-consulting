import React from 'react';

const SingleJobCategory = ({job}) => {
    const {id, category_logo, category_name, jobs_available} = job;
    return (
        <div className='bg-indigo-50 p-10'>
            <img src={category_logo} className='w-2/12' alt="" />
            <h4 className='text-xl pt-4 text-black font-bold'>{category_name}</h4>
            <p className='text-lg text-gray-600'>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default SingleJobCategory;