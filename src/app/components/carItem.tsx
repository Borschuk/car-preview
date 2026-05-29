import { Link } from "react-router";
import Button from "./button";
import { useTranslation } from "react-i18next";

export const CarItem = ({
  imageUrl,
  describe,
  id,
  name,
}: {
  imageUrl: string;
  describe: string;
  id: string;
  name: string;
}) => {
  const { t } = useTranslation("home");

  return (
    <div className="mx-auto mt-8 flex max-w-4xl flex-col justify-between gap-6 bg-white p-4 shadow-2xl sm:mt-12 sm:gap-8 sm:p-6 md:mt-16">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-6">
        <div
          className="min-h-48 w-full shrink-0 bg-contain bg-center bg-no-repeat sm:min-h-64 md:min-h-80 md:w-1/2 lg:min-h-112.5"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="w-full md:w-1/2">
          <div className="max-w-[400px] md:max-w-none">
            <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
              {name}
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              {describe}
            </p>
            <Link to={`/configurator/${id}`}>
              <Button type="link" className="mt-4">
                {t("view_more_link")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
