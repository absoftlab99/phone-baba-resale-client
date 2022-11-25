import React from 'react';

const AllSellers = () => {
    return (
        <div>
            <h1 className='text-2xl py-5'>All Sellers List</h1>
            <div className=''>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Verify</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>Abdullah Al Mahmud</td>
                        <td>abdullahtech2@outlook.com</td>
                        <td><button className='btn btn-error btn-sm'>Delete</button></td>
                        <td><button className='btn btn-success btn-sm'>Verify</button></td>
                    </tr>
                    <tr className="active">
                        <th>2</th>
                        <td>Md. Sahhin Reza</td>
                        <td>webgurureza@gmail.com</td>
                        <td><button className='btn btn-error btn-sm'>Delete</button></td>
                        <td><button className='btn btn-success btn-sm'>Verify</button></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Dalim Kumar</td>
                        <td>dalimkumar007@gmail.com</td>
                        <td><button className='btn btn-error btn-sm'>Delete</button></td>
                        <td><button className='btn btn-success btn-sm'>Verify</button></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;