import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../../index.css';
import { Scrollbar, Autoplay } from 'swiper/modules';
import Swiper1 from "../../assets/images/swiper1.jpg";
import Swiper2 from "../../assets/images/swiper2.jpg";
import Swiper3 from "../../assets/images/swiper3.jpg";
import Swiper4 from "../../assets/images/swiper4.jpg";


export default function Hero() {
    return (
        <>
            <div className="container mx-auto rounded-[12px] mt-[16px] overflow-hidden">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={Swiper1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Swiper2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Swiper3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Swiper4} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
