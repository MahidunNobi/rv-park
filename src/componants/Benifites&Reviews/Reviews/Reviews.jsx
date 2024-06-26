// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Reviews.css";

// import required modules
import { Navigation } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="md:w-1/2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl text-center font-semibold  border-b border-hunterGreen/40 pb-3">
        Tastimonials
      </h1>
      <div className="max-w-full md:px-6">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="px-12">
              <q>
                Awesome experience stending time in RV park.Awesome experience
                stending time in RV park.
              </q>
              <br />
              <br />
              <span> Mr. Carlos</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-12">
              <q>
                Awesome experience stending time in RV park.Awesome experience
                stending time in RV park.
              </q>
              <br />
              <br />
              <span> Mr. Carlos</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-12">
              <q>
                Awesome experience stending time in RV park.Awesome experience
                stending time in RV park.
              </q>
              <br />
              <br />
              <span> Mr. Carlos</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-12">
              <q>
                Awesome experience stending time in RV park.Awesome experience
                stending time in RV park.
              </q>
              <br />
              <br />
              <span> Mr. Carlos</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
