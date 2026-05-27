import { useTranslation } from "react-i18next";
import GallerySection from "../components/gallerySection";
import PageTitle from "../components/pageTitle";

const Gallery = () => {
  const { t } = useTranslation("gallery");

  return (
    <>
      <PageTitle>{t("title")}</PageTitle>
      <GallerySection />
    </>
  );
};

export default Gallery;
