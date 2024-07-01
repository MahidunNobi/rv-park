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
          {/* ---------Review-01-------- */}
          <SwiperSlide>
            <div className="px-12">
              <q>
                Wilson Christmas Tree Farm and RV Park is a hidden gem in
                Wilson, Oklahoma! It was very quiet with easy access to Highway
                70
              </q>
              <br />
              <br />
              <span> David Moore</span>
            </div>
          </SwiperSlide>
          {/* ---------Review-02-------- */}
          <SwiperSlide>
            <div className="px-12">
              <q>
                Tranquil escape from the highway noise. Wilson Christmas Tree
                Farm and RV Park is a gem waiting to be discovered.
              </q>
              <br />
              <br />
              <span>
                Ryan and Jessica <sup>March 2024</sup>{" "}
              </span>
            </div>
          </SwiperSlide>
          {/* ---------Review-03-------- */}
          <SwiperSlide>
            <div className="px-12">
              <q>
                Great spot for RV travelers and outdoor enthusiasts. Wilson
                Christmas Tree Farm and RV Park offers a refreshing escape.
              </q>
              <br />
              <br />
              <span>
                {" "}
                Tom and Emily <sup>Feb 2024</sup>
              </span>
            </div>
          </SwiperSlide>
          {/* ---------Review-04-------- */}
          <SwiperSlide>
            <div className="px-12">
              <q>
                Friendly staff, beautiful surroundings. Wilson Christmas Tree
                Farm and RV Park exceeded our expectations.
              </q>
              <br />
              <br />
              <span>
                {" "}
                John and Sarah <sup>December 2023</sup>
              </span>
            </div>
          </SwiperSlide>
          {/* ---------Review-05-------- */}
          <SwiperSlide>
            <div className="px-12">
              <q>
                A tranquil sanctuary away from the hustle and bustle. Wilson
                Christmas Tree Farm and RV Park is a true hidden gem.
              </q>
              <br />
              <br />
              <span>
                Alex B. <sup>June 2024</sup>
              </span>
            </div>
          </SwiperSlide>
          {/* ---------Review-06-------- */}
          <SwiperSlide>
            <div className="px-12">
              <q>
                Easy access off Highway 70 and easy online payment with site
                selection
              </q>
              <br />
              <br />
              <span>
                Mark and Sarah <sup>2024</sup>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
