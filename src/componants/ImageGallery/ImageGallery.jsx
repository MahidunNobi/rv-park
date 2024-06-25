import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SwiperCss.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Title from "../Title/Title";

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      <Title title="Image" colored="Gallery" />
      <div className="my-6">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper max-h-[450px]"
        >
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://media.istockphoto.com/id/1674215259/photo/playing-with-mother.jpg?s=1024x1024&w=is&k=20&c=1F7t4eeEgFKI_X5WZtHwCtjqNMEG7Vd6trVwuXdNLMs="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://cdn.pixabay.com/photo/2018/10/07/19/25/autumn-3731094_1280.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://media.istockphoto.com/id/1395974494/photo/smiling-mother-with-happy-son-playing-with-a-ball.jpg?s=1024x1024&w=is&k=20&c=eku5aKrMbqtrT9py69KqSVTerzddtELkBkC5Ay27ECI="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://media.istockphoto.com/id/844226976/photo/a-mother-is-playing-with-her-son-in-the-ball-in-the-park.jpg?s=1024x1024&w=is&k=20&c=T7B8eOuQnGXsTomF0IMHZmUHK-h3_zETo3VN3DRoR_s="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://media.istockphoto.com/id/1289925458/photo/family-playing-outside-in-their-backyard.jpg?s=1024x1024&w=is&k=20&c=5EUiTRQSiipOgafjogQ_m_IhWPyG0bSsGnKSsQXcFpg="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://cdn.pixabay.com/photo/2018/10/07/19/25/autumn-3731094_1280.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://media.istockphoto.com/id/844226976/photo/a-mother-is-playing-with-her-son-in-the-ball-in-the-park.jpg?s=1024x1024&w=is&k=20&c=T7B8eOuQnGXsTomF0IMHZmUHK-h3_zETo3VN3DRoR_s="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://media.istockphoto.com/id/1289925458/photo/family-playing-outside-in-their-backyard.jpg?s=1024x1024&w=is&k=20&c=5EUiTRQSiipOgafjogQ_m_IhWPyG0bSsGnKSsQXcFpg="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full object-cover"
              src="https://media.istockphoto.com/id/844226976/photo/a-mother-is-playing-with-her-son-in-the-ball-in-the-park.jpg?s=1024x1024&w=is&k=20&c=T7B8eOuQnGXsTomF0IMHZmUHK-h3_zETo3VN3DRoR_s="
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
