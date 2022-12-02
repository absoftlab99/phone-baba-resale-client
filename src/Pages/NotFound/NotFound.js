import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.gif';

const Error = () => {
    return (
        <div className='m-auto flex flex-col items-center'>
            <img className='m-auto' src={error} alt="" />
            <Link className='btn btn-primary text-center w-40' to='/home'>Back to Home</Link>
        </div>
    );
};

export default Error;