import React from 'react';
import { BsBookmarkCheck, BsShieldFillCheck } from 'react-icons/bs';
import { BiCategory } from "react-icons/bi";


const Product = ({product}) => {
    const {name, photo, price, productName, resalePrice, location, usesYear, postTime, category} = product;
    return (
        <div>
            {/* <p className="py-6">You can register here using your name, email, password or google, facebook and twitter. go ON!!</p> */}
            <div className="card bg-base-100 shadow-xl m-5">
                <figure className=''><img src={photo} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-left">{productName}</h2>
                    <p className='m-0 text-left'>Location: <b>{location}</b></p>
                    <p className='m-0 text-left'>Resale Price: <b className='text-accent'>{resalePrice} BDT</b></p>
                    <p className='m-0 text-left'>Original Price: <b className='text-gray-500'>{price} BDT</b></p>
                    <p className='m-0 text-left'>Uses Duration: <b className='text-gray-500'>{usesYear}</b></p>
                    <p className='m-0 text-left flex my-auto'>Owner: <b className='pl-1'>{name}</b><span className='text-blue-600 pl-2'><BsShieldFillCheck></BsShieldFillCheck></span></p>
                    <p className='m-0 text-left'>Publish Date: <b>{postTime}</b></p>
                    <div className="card-actions">
                    <button className="btn btn-sm btn-primary"><BsBookmarkCheck className='mr-2'></BsBookmarkCheck>Book Now</button>
                    <span className='btn btn-sm btn-accent'><BiCategory className='mr-2'></BiCategory> {category}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;