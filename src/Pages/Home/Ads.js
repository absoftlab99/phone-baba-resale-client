import React from 'react';

const Ads = () => {
    return (
        <div className='w-[80%] lg:w-1/2 mx-auto mt-10'>
            <div className="h-[150px] card card-side bg-base-100 shadow-xl border">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
                <div className="card-body p-4">
                    <h2 className="card-title">Product Name</h2>
                    <p className='text-left'>Price: 200 BDT</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ads;