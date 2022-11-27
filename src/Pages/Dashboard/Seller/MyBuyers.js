import React from 'react';

const MyBuyers = () => {
    return (
        <div className='my-5'>
            <h1 className='text-3xl my-5'>My Buyer List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <th>1</th>
                        <td>Pagla Reza</td>
                        <td>Thakurgoan</td>
                        <td>webgurureza@gmail.com</td>
                        <td>+880178526525</td>
                        <td><button className='btn btn-error btn-sm'>Delete</button></td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td>Dalim Kumar</td>
                        <td>Dinajpur</td>
                        <td>dalimkumar@gmail.com</td>
                        <td>+880178526542</td>
                        <td><button className='btn btn-error btn-sm'>Delete</button></td>
                    </tr>

                    <tr>
                        <th>3</th>
                        <td>Pagla Reza</td>
                        <td>Thakurgoan</td>
                        <td>webgurureza@gmail.com</td>
                        <td>+880178526525</td>
                        <td><button className='btn btn-error btn-sm'>Delete</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;