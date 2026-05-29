import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Button from "./button";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import interiorCarType1 from "../../assets/images/interior/car-type-1.webp";
import interiorCarType2 from "../../assets/images/interior/car-type-2.webp";
import interiorCarType3 from "../../assets/images/interior/car-type-3.webp";
import interiorCarType4 from "../../assets/images/interior/car-type-4.webp";
import exteriorCarType1 from "../../assets/images/exterior/car-type-1.webp";
import exteriorCarType2 from "../../assets/images/exterior/car-type-2.webp";
import exteriorCarType3 from "../../assets/images/exterior/car-type-3.webp";
import exteriorCarType4 from "../../assets/images/exterior/car-type-4.webp";

const GallerySection = () => {
  const [spaceAspect, setSpaceAspect] = useState<"interior" | "exterior">(
    "interior"
  );

  const { t } = useTranslation("gallery");
  const galleryImages = {
    interior: [
      interiorCarType1,
      interiorCarType2,
      interiorCarType3,
      interiorCarType4,
    ],
    exterior: [
      exteriorCarType1,
      exteriorCarType2,
      exteriorCarType3,
      exteriorCarType4,
    ],
  } as const;

  return (
    <>
      <div className="flex justify-center gap-4 px-4 pt-8 sm:gap-8 sm:pt-12 md:pt-16">
        <Button
          type="tab"
          className={`px-3 py-3 text-sm sm:px-4 sm:text-base ${
            spaceAspect === "interior" ? "border-b-3" : ""
          }`}
          onClick={() => setSpaceAspect("interior")}
        >
          {t("interior")}
        </Button>

        <Button
          type="tab"
          className={`px-3 py-3 text-sm sm:px-4 sm:text-base ${
            spaceAspect === "exterior" ? "border-b-3" : ""
          }`}
          onClick={() => setSpaceAspect("exterior")}
        >
          {t("exterior")}
        </Button>
      </div>
      <div className="gallery-swiper mx-auto mt-6 w-full max-w-4xl px-4 sm:mt-8">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          modules={[Navigation]}
          className="mySwiper"
          navigation
        >
          <SwiperSlide>
            <img
              src={galleryImages[spaceAspect][0]}
              alt="car type 1"
              className="mx-auto h-auto max-h-[50vh] w-full object-contain sm:max-h-[60vh]"
            />
            <p className="mt-4 px-2 text-center text-sm sm:text-base">
              {t(`${spaceAspect}_des_1`)}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={galleryImages[spaceAspect][1]}
              alt="car type 2"
              className="mx-auto h-auto max-h-[50vh] w-full object-contain sm:max-h-[60vh]"
            />
            <p className="mt-4 px-2 text-center text-sm sm:text-base">
              {t(`${spaceAspect}_des_2`)}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={galleryImages[spaceAspect][2]}
              alt="car type 3"
              className="mx-auto h-auto max-h-[50vh] w-full object-contain sm:max-h-[60vh]"
            />
            <p className="mt-4 px-2 text-center text-sm sm:text-base">
              {t(`${spaceAspect}_des_3`)}
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={galleryImages[spaceAspect][3]}
              alt="car type 4"
              className="mx-auto h-auto max-h-[50vh] w-full object-contain sm:max-h-[60vh]"
            />
            <p className="mt-4 px-2 text-center text-sm sm:text-base">
              {t(`${spaceAspect}_des_4`)}
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default GallerySection;
