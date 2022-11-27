import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h1 className='text-3xl py-4'>Product Add Form</h1>
            <form className='w-8/12 mx-auto'>
                <div className="form-control grid grid-cols-2 gap-16">
                    <div className=''>
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="product name" className="input input-bordered w-full" />
                    </div>
                    <div>
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="price" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="form-control grid grid-cols-2 gap-16">
                    <div className=''>
                    <label className="label">
                        <span className="label-text">Contact</span>
                    </label>
                    <input type="text" placeholder="phone number" className="input input-bordered w-full" />
                    </div>
                    <div>
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="ex- Dhaka" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="form-control grid grid-cols-2 gap-16">
                    <div className=''>
                    <label className="label">
                        <span className="label-text">Phone Condition</span>
                    </label>
                    <select className="select w-full max-w-xs select-bordered">
                        <option disabled selected>Pick phone condition</option>
                        <option className=''>Excellent</option>
                        <option className=''>Good</option>
                        <option className=''>Fair</option>
                    </select>
                    </div>
                    <div>
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className="select w-full max-w-xs select-bordered">
                        <option disabled selected>Category</option>
                        <option className=''>iPhone</option>
                        <option className=''>Redmi</option>
                        <option className=''>Samsung</option>
                        <option className=''>Techno</option>
                    </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;