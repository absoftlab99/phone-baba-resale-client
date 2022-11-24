import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cover from '../../Assets/images/cover.gif';
import cover1 from '../../Assets/images/cover2.gif';

const Banner = () => {
    return (
        <div className="">
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={cover} alt="cover-1" className="max-w-sm rounded-lg" />
                    <div className="p-5">
                    <h1 className="text-5xl font-bold">Sell Your Used Phone!!</h1>
                    <p className="py-6">You can easily sell your used phone on “Mobile Baba” at a good price. Go to "Add Product" and add the phone with your phone's picture, condition, details, name, model etc.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={cover1} alt="cover-1" className="max-w-sm rounded-lg" />
                    <div className="p-5">
                    <h1 className="text-5xl font-bold">Find Used Phone Here!!</h1>
                    <p className="py-6">If you need a second hand phone at an affordable price, then “Phone Baba” is the best choice. Search, Like, Buy. Simple!!</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
