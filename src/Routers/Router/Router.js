import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Cpanel from '../../layouts/Cpanel';
import Main from '../../layouts/Main';
import Category from '../../Pages/Category/Category';
import AllBuyers from '../../Pages/Dashboard/Admin/AllBuyers';
import AllSellers from '../../Pages/Dashboard/Admin/AllSellers';
import ReportedItems from '../../Pages/Dashboard/Admin/ReportedItems';
import MyOrders from '../../Pages/Dashboard/Buyer/MyOrders';
import WishList from '../../Pages/Dashboard/Buyer/WishList';
import AddProduct from '../../Pages/Dashboard/Seller/AddProduct';
import MyBuyers from '../../Pages/Dashboard/Seller/MyBuyers';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import MyProducts from '../../Pages/Dashboard/Seller/MyProducts/MyProducts';
import Register from '../../Pages/Register/Register';
import Products from '../../Pages/Products/Products';

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
                path: '/products',
                element: <Products></Products>
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
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/wishList',
                element: <WishList></WishList>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
        ]
    }
])