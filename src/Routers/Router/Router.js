import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Cpanel from '../../layouts/Cpanel';
import Main from '../../layouts/Main';
import Category from '../../Pages/Category/Category';
import AllBuyers from '../../Pages/Dashboard/Admin/AllBuyers';
import AllSellers from '../../Pages/Dashboard/Admin/AllSellers';
import ReportedItems from '../../Pages/Dashboard/Admin/ReportedItems';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import Register from '../../Pages/Register/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-products',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Cpanel></Cpanel>,
        children:[
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
            },
        ]
    }
])