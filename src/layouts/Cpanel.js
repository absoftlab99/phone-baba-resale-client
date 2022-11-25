import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../Pages/Dashboard/SideNav';
import Header from '../Pages/Shared/Header/Header';

const Cpanel = () => {
    return (
        <>
        <Header></Header>
        <div className='w-full md:flex '>
            <div className="w-full md:w-3/12">
                <SideNav></SideNav>
            </div>
            <div className="md:w-full p-5">
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default Cpanel;