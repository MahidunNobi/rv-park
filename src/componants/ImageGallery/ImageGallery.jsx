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

// importing images...
import spot_1 from "../../assets/PhotoGallery/spot_1.jpg";
import spot_2 from "../../assets/PhotoGallery/spot_2.jpg";
import spot_3 from "../../assets/PhotoGallery/spot_3.jpg";
import spot_4 from "../../assets/PhotoGallery/spot_4.jpg";
import spot_5 from "../../assets/PhotoGallery/spot_5.jpg";
import spot_6 from "../../assets/PhotoGallery/spot_6.jpg";
import spot_7 from "../../assets/PhotoGallery/spot_7.jpg";
import spot_8 from "../../assets/PhotoGallery/spot_8.jpg";
import spot_9 from "../../assets/PhotoGallery/spot_9.jpg";
import spot_10 from "../../assets/PhotoGallery/spot_10.jpg";
import spot_12 from "../../assets/PhotoGallery/spot_12.jpg";
import spot_13 from "../../assets/PhotoGallery/spot_13.jpg";
import spot_14 from "../../assets/PhotoGallery/spot_14.jpg";
import spot_17 from "../../assets/PhotoGallery/spot_17.jpg";
import spot_18 from "../../assets/PhotoGallery/spot_18.jpg";
import spot_19 from "../../assets/PhotoGallery/spot_19.jpg";
import spot_20 from "../../assets/PhotoGallery/spot_20.jpg";
import spot_22 from "../../assets/PhotoGallery/spot_22.jpg";
import spot_23 from "../../assets/PhotoGallery/spot_23.jpg";

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
            <img loading="lazy" className="h-full object-cover" src={spot_1} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_2} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_3} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_4} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_5} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_6} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_7} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_8} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_9} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_10} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_12} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_13} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_14} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_17} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_18} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_19} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_20} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_22} />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="h-full object-cover" src={spot_23} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
