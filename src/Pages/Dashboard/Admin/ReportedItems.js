import React from 'react';
import phone from '../../../Assets/images/phone1.jpg';
import phone2 from '../../../Assets/images/phone2.jpg';

const ReportedItems = () => {
    return (
        <div>
            <h1 className='text-2xl py-5'>Reported Items</h1>
            <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Product</th>
                        <th>Owner</th>
                        <th>User Status</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={phone} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">iPhone 14 Pro Max</div>
                            <div className="text-sm opacity-50">1,50,000 BDT</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Abdullah Al Mahmud
                        <br/>
                        <span className="badge badge-ghost badge-sm">abdullahtech2@outlook.com</span>
                        </td>
                        <td><div className='badge badge-success'>Verified</div></td>
                        <th>
                        <button className="btn btn-error md:btn-sm btn-xs">Delete</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={phone2} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Redmi Note 12 Pro Max</div>
                            <div className="text-sm opacity-50">35,000 BDT</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Md Sahhin Reza
                        <br/>
                        <span className="badge badge-ghost badge-sm">webgurureza@gmail.com</span>
                        </td>
                        <td><div className='badge badge-ghost'>Unverified</div></td>
                        <th>
                        <button className="btn btn-error md:btn-sm btn-xs">Delete</button>
                        </th>
                    </tr>
                    </tbody>

                    <tfoot>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Owner</th>
                        <th>User Status</th>
                        <th>Delete</th>
                    </tr>
                    </tfoot>
                    
                </table>
                </div>
            </div>
        </div>
    );
};

export default ReportedItems;