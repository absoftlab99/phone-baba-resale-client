import React from 'react';

const Category = () => {
    return (
        <div className='w-[80%] lg:w-1/2 mx-auto mt-10'>
            <h2 className='text-3xl py-4'>Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 align-middle gap-4 justify-center">
                <div className="card p-5 shadow-xl md:p-10 w-40 border cursor-pointer bg-accent hover:bg-primary">iPhone</div>
                <div className="card p-5 shadow-xl md:p-10 w-40 border cursor-pointer bg-accent hover:bg-primary">Redmi</div>
                <div className="card p-5 shadow-xl md:p-10 w-40 border cursor-pointer bg-accent hover:bg-primary">Samsung</div>
                <div className="card p-5 shadow-xl md:p-10 w-40 border cursor-pointer bg-accent hover:bg-primary">Techno</div>
                <div className="card p-5 shadow-xl md:p-10 w-40 border cursor-pointer bg-accent hover:bg-primary">Vivo</div>
                <div className="card p-5 shadow-xl md:p-10 w-40 border cursor-pointer bg-accent hover:bg-primary">Samsung</div>
                <div className="card p-5 shadow-xl md:p-10 w-40 border cursor-pointer bg-accent hover:bg-primary">Techno</div>
                <div className="card p-5 shadow-xl md:p-10 w-40 border cursor-pointer bg-accent hover:bg-primary">Spark</div>
            </div>
        </div>
    );
};

export default Category;