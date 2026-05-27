import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Button from "./button";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const GallerySection = () => {
  const [spaceAspect, setSpaceAspect] = useState("interior");

  const { t } = useTranslation("gallery");

  return (
    <>
      <div className="text-center pt-16 flex justify-center gap-8">
        <Button
          type="tab"
          className={spaceAspect === "interior" ? "border-b-3 " : ""}
          onClick={() => setSpaceAspect("interior")}
        >
          {t("interior")}
        </Button>

        <Button
          type="tab"
          className={spaceAspect === "exterior" ? "border-b-3" : ""}
          onClick={() => setSpaceAspect("exterior")}
        >
          {t("exterior")}
        </Button>
      </div>
      <div className="w-200 mt-8 m-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          className="mySwiper"
          navigation
        >
          <SwiperSlide>
            <img
              src={`src/assets/images/${spaceAspect}/car-type-1.webp`}
              alt="car type 1"
            />
            <p className="text-center mt-4">{t(`${spaceAspect}_des_1`)}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`src/assets/images/${spaceAspect}/car-type-2.webp`}
              alt="car type 2"
            />
            <p className="text-center mt-4">{t(`${spaceAspect}_des_2`)}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`src/assets/images/${spaceAspect}/car-type-3.webp`}
              alt="car type 3"
            />
            <p className="text-center mt-4">{t(`${spaceAspect}_des_3`)}</p>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={`src/assets/images/${spaceAspect}/car-type-4.webp`}
              alt="car type 4"
            />
            <p className="text-center mt-4">{t(`${spaceAspect}_des_4`)}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default GallerySection;
