import React from 'react';
import photo from '../../Assets/images/phone1.jpg';
import { BsBookmarkCheck, BsFillCheckCircleFill } from 'react-icons/bs';
import { BiCategory } from "react-icons/bi";

const Ads = () => {
    return (
        <section className='my-10'>
            <h1 className='text-3xl'>Advertise Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 md:w-10/12 m-auto'>

                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img className='' src={photo} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">iPhone 14 pro Max</h2>
                        <p className='m-0 text-left'>Location: <b>Dhaka</b></p>
                        <p className='m-0 text-left'>Resale Price: <b className='text-accent'>10,000 BDT</b></p>
                        <p className='m-0 text-left'>Original Price: <b className='text-gray-500'>2,00,000 BDT</b></p>
                        <p className='m-0 text-left'>Uses Duration: <b className='text-gray-500'>2 Years</b></p>
                        <p className='m-0 text-left flex my-auto'>Owner: <b className='pl-1'>Abdullah Al Mahmud</b><span className='text-blue-600 pl-2'><BsFillCheckCircleFill></BsFillCheckCircleFill></span></p>
                        <p className='m-0 text-left'>Publish Date: <b>10 Dec 2022</b></p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary"><BsBookmarkCheck className='mr-2'></BsBookmarkCheck>Book Now</button>
                        <span className='btn btn-sm btn-accent'><BiCategory className='mr-2'></BiCategory> Apple</span>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img className='' src={photo} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">iPhone 14 pro Max</h2>
                        <p className='m-0 text-left'>Location: <b>Dhaka</b></p>
                        <p className='m-0 text-left'>Resale Price: <b className='text-accent'>10,000 BDT</b></p>
                        <p className='m-0 text-left'>Original Price: <b className='text-gray-500'>2,00,000 BDT</b></p>
                        <p className='m-0 text-left'>Uses Duration: <b className='text-gray-500'>2 Years</b></p>
                        <p className='m-0 text-left flex my-auto'>Owner: <b className='pl-1'>Abdullah Al Mahmud</b><span className='text-blue-600 pl-2'><BsFillCheckCircleFill></BsFillCheckCircleFill></span></p>
                        <p className='m-0 text-left'>Publish Date: <b>10 Dec 2022</b></p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary"><BsBookmarkCheck className='mr-2'></BsBookmarkCheck>Book Now</button>
                        <span className='btn btn-sm btn-accent'><BiCategory className='mr-2'></BiCategory> Apple</span>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img className='' src={photo} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">iPhone 14 pro Max</h2>
                        <p className='m-0 text-left'>Location: <b>Dhaka</b></p>
                        <p className='m-0 text-left'>Resale Price: <b className='text-accent'>10,000 BDT</b></p>
                        <p className='m-0 text-left'>Original Price: <b className='text-gray-500'>2,00,000 BDT</b></p>
                        <p className='m-0 text-left'>Uses Duration: <b className='text-gray-500'>2 Years</b></p>
                        <p className='m-0 text-left flex my-auto'>Owner: <b className='pl-1'>Abdullah Al Mahmud</b><span className='text-blue-600 pl-2'><BsFillCheckCircleFill></BsFillCheckCircleFill></span></p>
                        <p className='m-0 text-left'>Publish Date: <b>10 Dec 2022</b></p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary"><BsBookmarkCheck className='mr-2'></BsBookmarkCheck>Book Now</button>
                        <span className='btn btn-sm btn-accent'><BiCategory className='mr-2'></BiCategory> Apple</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ads;