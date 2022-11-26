import React from 'react';
import { BiFlag, BiUser } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { FaAd, FaHeart, FaList, FaPlus, FaUser } from 'react-icons/fa';
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
            <Link className='flex justify-start items-center btn btn-ghost' to='/dashboard/addProduct'><FaPlus className='mr-2'></FaPlus> Add Product</Link>
            <Link className='flex justify-start items-center btn btn-ghost' to='/dashboard/myProducts'><FaAd className='mr-2'></FaAd> My Products</Link>
            <Link className='flex justify-start items-center btn btn-ghost' to='/dashboard/myBuyers'><FaUser className='mr-2'></FaUser> My Buyers</Link>
            <Link className='flex justify-start items-center btn btn-ghost' to='/dashboard/myOrders'><FaList className='mr-2'></FaList> My Orders</Link>
            <Link className='flex justify-start items-center btn btn-ghost' to='/dashboard/wishList'><FaHeart className='mr-2'></FaHeart> Wish List</Link>
        </div>
        </>
    );
};

export default SideNav;