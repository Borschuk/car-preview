import { useParams } from "react-router";
import CarsSection from "../components/carsSection";
import CarInfo from "../components/carInfo";
import PageTitle from "../components/pageTitle";
import { useTranslation } from "react-i18next";

const Configurator = () => {
  const { id } = useParams();
  const { t } = useTranslation("configurator");

  return (
    <>
      <PageTitle>{t("title")}</PageTitle>
      {id ? <CarInfo id={id} /> : <CarsSection />}
    </>
  );
};

export default Configurator;
