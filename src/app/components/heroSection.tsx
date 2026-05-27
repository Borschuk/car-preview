import { Link } from "react-router";
import Button from "./button";
import { useTranslation } from "react-i18next";
import homeBgUrl from "../../assets/images/home-bg.webp";

const HeroSection = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBgUrl})` }}
      >
        <div className="pt-125 bg-linear-to-b/srgb from-white/0 to-white/20"></div>
      </div>
      <div className="flex items-center justify-center h-full flex-col max-w-lg mx-auto mt-4">
        <h1 className="text-4xl font-bold text-black-500 text-center">
          {t("hero_title")}
        </h1>
        <p className="text-lg text-gray-700 mt-4 text-center">
          {t("hero_description")}
        </p>
        <div className="mt-6">
          <Link to="/configurator">
            <Button type="primary">{t("configure_button")}</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
