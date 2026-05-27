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
            <img src={galleryImages[spaceAspect][0]} alt="car type 1" />
            <p className="text-center mt-4">{t(`${spaceAspect}_des_1`)}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImages[spaceAspect][1]} alt="car type 2" />
            <p className="text-center mt-4">{t(`${spaceAspect}_des_2`)}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={galleryImages[spaceAspect][2]} alt="car type 3" />
            <p className="text-center mt-4">{t(`${spaceAspect}_des_3`)}</p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={galleryImages[spaceAspect][3]} alt="car type 4" />
            <p className="text-center mt-4">{t(`${spaceAspect}_des_4`)}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default GallerySection;
