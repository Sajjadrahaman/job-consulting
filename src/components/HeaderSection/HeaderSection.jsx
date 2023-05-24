import React from 'react';

const HeaderSection = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2'>
                <div className='flex items-center'>
                    <div>
                        <h2 className='text-6xl font-bold text-black'>One Step <br /> Closer To Your <br /> <span className='text-violet-500'>Dream Job</span></h2>
                        <p className='text-gray-500 font-semibold py-5'>Explore thousands of job opportunities with all the <br /> information you need.  Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='bg-violet-500 hover:bg-violet-800 font-semibold px-4 py-3 text-white rounded-lg'>Get Started</button>
                    </div>
                </div>
                <div>
                    <img className='w-10/12 mx-auto' src="https://i.ibb.co/fSvX9vX/P3-OLGJ1-copy-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;