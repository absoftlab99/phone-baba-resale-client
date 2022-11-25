import React from 'react';
import { BiFlag, BiUser } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <>
        <div className='bg-gray-600'>
            <h1 className='text-5xl ff-comfort font-bold text-accent p-3 flex'><BsGear className='pr-2'></BsGear> admin</h1>
        </div>
        <div className='bg-gray-200'>
            <Link className='flex justify-start items-center btn btn-ghost' to='/dashboard/allSellers'><FaUser className='mr-2'></FaUser> All Sellers</Link>
            <Link className='flex justify-start items-center btn btn-ghost' to='/dashboard/allBuyers'><BiUser className='mr-2'></BiUser> All Buyers</Link>
            <Link className='flex justify-start items-center btn btn-ghost' to='/dashboard/reportedItems'><BiFlag className='mr-2'></BiFlag> Reported Items</Link>
        </div>
        </>
    );
};

export default SideNav;