"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

interface ImageSliderProps {
  slidesToShow?: number;
  images: (string | StaticImageData)[];
}
const SliderGame: React.FC<ImageSliderProps> = ({ slidesToShow = 5, images }) => {
  return (
    <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          speed={4000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            450: { slidesPerView: Math.min(2, slidesToShow) },
            600: { slidesPerView: Math.min(3, slidesToShow) },
            800: { slidesPerView: Math.min(4, slidesToShow) },
            1024: { slidesPerView: slidesToShow },
          }}
          spaceBetween={20}
        >
        {images.map((img, index) => (
          <SwiperSlide key={index} >
            <Image src={img} alt={`slide-${index}`} className="w-full h-[280px] border border-red-500  rounded-lg" />
            <h2>conter game</h2>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default SliderGame