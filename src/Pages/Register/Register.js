import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGoogle, FaTwitter } from 'react-icons/fa';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register Here!</h1>
                <p className="py-6">You can register here using your name, email, password or google, facebook and twitter. go ON!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Upload Photo</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    </div>
                    <div className='flex justify-items-center items-center gap-2'>
                        <input type="radio" name="radio-2" className="radio radio-primary" />
                        <label className="label">
                            <span className="label-text">As a Seller</span>
                        </label>
                        <input type="radio" name="radio-2" className="radio radio-accent" checked/>
                        <label className="label">
                            <span className="label-text">As a Buyer</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                    <label className="label">
                        <Link to='/login' className="label-text-alt link link-hover">If you have already an account! please LOGIN</Link>
                    </label>
                    <div className="divider">OR</div>
                    <div className="flex justify-center">
                        <FaGoogle className='text-2xl mx-2 text-error'></FaGoogle>
                        <FaFacebookSquare className='text-2xl mx-2 text-primary'></FaFacebookSquare>
                        <FaTwitter className='text-2xl mx-2 text-info'></FaTwitter>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;