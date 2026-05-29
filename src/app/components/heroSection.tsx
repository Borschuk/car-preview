import { Link } from "react-router";
import Button from "./button";
import { useTranslation } from "react-i18next";
import homeBgUrl from "../../assets/images/home-bg.webp";

const HeroSection = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeBgUrl})` }}
      >
        <div className="pt-48 bg-linear-to-b/srgb from-white/0 to-white/20 sm:pt-80 md:pt-125" />
      </div>
      <div className="mx-auto mt-4 flex h-full max-w-lg flex-col items-center justify-center px-4 pb-8 sm:px-6">
        <h1 className="text-center text-2xl font-bold text-black-500 sm:text-3xl md:text-4xl">
          {t("hero_title")}
        </h1>
        <p className="mt-4 text-center text-base text-gray-700 sm:text-lg">
          {t("hero_description")}
        </p>
        <div className="mt-6 w-full sm:w-auto">
          <Link
            to="/configurator"
            className="block w-full sm:inline-block sm:w-auto"
          >
            <Button type="primary" className="w-full sm:w-auto">
              {t("configure_button")}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
