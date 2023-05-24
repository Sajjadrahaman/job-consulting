import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='md:flex items-center justify-between text-center bg-violet-100 my-4 p-3 rounded-lg '>
            <div className=''>
                <h2 className='text-2xl text-black font-bold'>Job Consulting</h2>
            </div>
            <div className='font-medium py-5 sm:py-0 text-black'>
                <Link to='/' className='hover:text-violet-500'>Home</Link>
                <Link to='statistics' className='hover:text-violet-500'>Statistics</Link>
                <Link to='applied' className='hover:text-violet-500'>Applied Jobs</Link>
                <Link to='blog' className='hover:text-violet-500'>Blog</Link>
            </div>
            <div className=''>
                <button className='bg-violet-500 hover:bg-violet-800 py-2 px-3 text-white font-bold rounded-lg'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;