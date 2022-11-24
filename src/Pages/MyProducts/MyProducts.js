import React from 'react';
import phone1 from '../../Assets/images/phone1.jpg';
import phone2 from '../../Assets/images/phone2.jpg';
import phone3 from '../../Assets/images/phone3.jpg';

const MyProducts = () => {
    return (
        <div className='mt-10'>
            <h1 className="text-5xl font-bold">My Products</h1>
            {/* <p className="py-6">You can register here using your name, email, password or google, facebook and twitter. go ON!!</p> */}
            <div className="grid lg:grid-cols-3 lg:px-10 mt-15">
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img src={phone1} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">New album is released!</h2>
                        <p className='m-0 text-left'>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary">Advertise</button>
                        <button className="btn btn-sm btn-accent">View Details</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img src={phone2} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">New album is released!</h2>
                        <p className='m-0 text-left'>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary">Advertise</button>
                        <button className="btn btn-sm btn-accent">View Details</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl m-5">
                    <figure className=''><img src={phone3} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">New album is released!</h2>
                        <p className='m-0 text-left'>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions">
                        <button className="btn btn-sm btn-primary">Advertise</button>
                        <button className="btn btn-sm btn-accent">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;