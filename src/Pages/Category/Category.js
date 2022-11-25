import React from 'react';
import phone1 from '../../Assets/images/phone1.jpg';
import phone2 from '../../Assets/images/phone2.jpg';
import phone3 from '../../Assets/images/phone3.jpg';
import { BsShieldFillCheck } from "react-icons/bs";


const Category = () => {
    return (
        <div>
            <div className='mt-10'>
            <h1 className="text-4xl font-bold">Products Category</h1>
            {/* <p className="py-6">You can register here using your name, email, password or google, facebook and twitter. go ON!!</p> */}
            <div className="grid lg:grid-cols-3 lg:px-10 mt-15">
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img src={phone1} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">iphone 14 Max Pro 8/64</h2>
                        <p className='m-0 text-left'>Location: <b>Dinajpur</b></p>
                        <p className='m-0 text-left'>Resale Price: <b className='text-accent'>40,000 BDT</b></p>
                        <p className='m-0 text-left'>Original Price: <b className='text-gray-500'>1,50,000 BDT</b></p>
                        <p className='m-0 text-left'>Uses Duration: <b className='text-gray-500'>1 Year</b></p>
                        <p className='m-0 text-left flex my-auto'>Owner: <b>Abdullah Al Mahmud</b><span className='text-blue-600 pl-2'><BsShieldFillCheck></BsShieldFillCheck></span></p>
                        <p className='m-0 text-left'>Publish Date: <b>2 Dec 2022 | 10:30 PM</b></p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img src={phone2} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">iphone 14 Max Pro 8/64</h2>
                        <p className='m-0 text-left'>Location: <b>Dinajpur</b></p>
                        <p className='m-0 text-left'>Resale Price: <b className='text-accent'>40,000 BDT</b></p>
                        <p className='m-0 text-left'>Original Price: <b className='text-gray-500'>1,50,000 BDT</b></p>
                        <p className='m-0 text-left'>Uses Duration: <b className='text-gray-500'>1 Year</b></p>
                        <p className='m-0 text-left flex my-auto'>Owner: <b>Abdullah Al Mahmud</b><span className='text-blue-600 pl-2'><BsShieldFillCheck></BsShieldFillCheck></span></p>
                        <p className='m-0 text-left'>Publish Date: <b>2 Dec 2022 | 10:30 PM</b></p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img src={phone3} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">iphone 14 Max Pro 8/64</h2>
                        <p className='m-0 text-left'>Location: <b>Dinajpur</b></p>
                        <p className='m-0 text-left'>Resale Price: <b className='text-accent'>40,000 BDT</b></p>
                        <p className='m-0 text-left'>Original Price: <b className='text-gray-500'>1,50,000 BDT</b></p>
                        <p className='m-0 text-left'>Uses Duration: <b className='text-gray-500'>1 Year</b></p>
                        <p className='m-0 text-left flex my-auto'>Owner: <b>Abdullah Al Mahmud</b><span className='text-blue-600 pl-2'><BsShieldFillCheck></BsShieldFillCheck></span></p>
                        <p className='m-0 text-left'>Publish Date: <b>2 Dec 2022 | 10:30 PM</b></p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Category;