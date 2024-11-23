'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { homepageItem } from './_data/homepage';

export default function Home() {
  return (
    <main className="">
      <div className="swiper-theme-container w-screen h-full">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          modules={[Pagination, Autoplay]}
        >
          {homepageItem.map(slide => (
            <SwiperSlide key={slide.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
