import React from 'react';
import Ads from './Ads';
import Banner from './Banner';
import { DiApple } from "react-icons/di";
import { SiXiaomi, SiNokia, SiBlackberry, SiSamsung } from "react-icons/si";
import { TbLetterW } from "react-icons/tb";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-[80%] lg:w-1/2 mx-auto mt-10'>
                <h2 className='text-3xl py-4'>Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 align-middle gap-4 justify-center">
                    <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary">
                        <p className='m-auto'><DiApple className='text-4xl'></DiApple></p>
                    </div>
                    <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary md:col-span-2">
                        <p className='m-auto'><SiXiaomi className='text-3xl'></SiXiaomi></p>
                    </div>
                    <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary">
                        <p className='m-auto'><SiNokia className='text-6xl'></SiNokia></p>
                    </div>
                    <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary">
                        <p className='m-auto'><SiBlackberry className='text-3xl'></SiBlackberry></p>
                    </div>
                    <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary md:col-span-2">
                        <p className='m-auto'><SiSamsung className='text-6xl'></SiSamsung></p>
                    </div>
                    <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary">
                    <p className='m-auto font-bold text-4xl'><TbLetterW></TbLetterW></p>
                    </div>
                </div>
            </div>
            <Ads></Ads>
        </div>
    );
};

export default Home;