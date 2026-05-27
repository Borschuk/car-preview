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
    <div className="flex flex-col justify-between shadow-2xl p-4 bg-white gap-10 mx-auto mt-16 max-w-[calc(100%-120px)]">
      <div className="flex items-center gap-4">
        <div
          className={`min-h-112.5 bg-no-repeat bg-center bg-contain w-[50%]`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="w-[50%]">
          <div className="max-w-[400px]">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600 mt-2">{describe}</p>
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
