import React, { useEffect, useState } from 'react';
import Product from './Product';

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        });
    },[])
    return (
        <div className=''>
            <h1 className="text-3xl">My Products</h1>
            <div className="grid lg:grid-cols-3 mt-15">
                {
                    products.map(product =><Product
                        key={product._id}
                        product={product}
                        ></Product>)
                }
            </div>
        </div>
    );
};

export default MyProducts;