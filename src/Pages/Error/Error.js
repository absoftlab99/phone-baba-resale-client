import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Assets/images/error.gif';

const Error = () => {
    return (
        <div className=''>
            <img className='m-auto' src={error} alt="" />
            <Link className='btn btn-primary' to='/home'>Back to Home</Link>
        </div>
    );
};

export default Error;