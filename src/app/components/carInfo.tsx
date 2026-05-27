import { useQuery } from "@tanstack/react-query";
import type { Cars } from "../types/dataTypes";
import { getCarById } from "../api/carsApi";
import Loading from "./loading";
import Button from "./button";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { TbEngine, TbManualGearbox } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { LuFuel } from "react-icons/lu";
import { SiSpeedtest } from "react-icons/si";
import { GiCarWheel } from "react-icons/gi";
import AccessoriesSection from "./accessoriesSection";
import useDataStore from "../store/useDataStore";
import { useState } from "react";

const CarInfo = ({ id }: { id: string }) => {
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const { data, isLoading, error } = useQuery<Cars>({
    queryKey: ["cars", id],
    queryFn: () => getCarById(id),
  });

  const { t, i18n } = useTranslation("configurator");

  const totalAccessoriesPrice = useDataStore(
    (state) => state.cars[`car${id}`]?.totalAccessoriesPrice
  );

  const currentLang: string = i18n.language || "en";

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="mt-8 text-center text-red-600">Error loading car</div>
    );
  if (!data) return <div className="mt-8 text-center">Car not found</div>;

  const handleAccessoriesList = () => {
    setIsAccessoriesOpen((prev) => !prev);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div
        className="bg-contain min-h-112.5 bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
      <p className="text-slate-600 mb-6">{data.describe[currentLang]}</p>

      <div className="grid gap-6 sm:grid-cols-2 mb-8">
        <div>
          <span className="block text-sm text-slate-500 font-semibold">
            {t("price")}
          </span>
          <p className="text-2xl font-bold text-blue-600">
            ${+data.price + parseFloat(totalAccessoriesPrice || "0")}
          </p>
        </div>
        <div>
          <span className="block text-sm text-slate-500 font-semibold">
            {t("type")}
          </span>
          <p className="text-xl">{data.type}</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-xl font-bold mb-4">{t("specifications")}</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="flex gap-1 text-sm text-slate-500">
              <TbEngine size={15} className="self-center" />
              {t("engine")}
            </span>
            <p className="font-semibold">{data.specifications.engine}</p>
          </div>
          <div>
            <span className="flex gap-1 text-sm text-slate-500">
              <SiSpeedtest size={15} className="self-center" />
              {t("horsepower")}
            </span>
            <p className="font-semibold">{data.specifications.horsepower} hp</p>
          </div>
          <div>
            <span className="flex gap-1 text-sm text-slate-500">
              <FaGear size={15} className="self-center" />
              {t("torque")}
            </span>
            <p className="font-semibold">{data.specifications.torque} Nm</p>
          </div>
          <div>
            <span className="flex gap-1 text-sm text-slate-500">
              <TbManualGearbox size={15} className="self-center" />
              {t("transmission")}
            </span>
            <p className="font-semibold">{data.specifications.transmission}</p>
          </div>
          <div>
            <span className="flex gap-1 text-sm text-slate-500">
              <GiCarWheel size={15} className="self-center" />
              {t("drivetrain")}
            </span>
            <p className="font-semibold">{data.specifications.drivetrain}</p>
          </div>
          <div>
            <span className="flex gap-1 text-sm text-slate-500">
              <LuFuel size={15} className="self-center" />
              {t("fuel_economy")}
            </span>
            <p className="font-semibold">{data.specifications.fuelEconomy}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Link
          to="/finance"
          state={{ data: { price: data.price, name: data.name, id: data.id } }}
        >
          <Button type="primary" className="mt-8">
            {t("credit_calculator")}
          </Button>
        </Link>
        <Button type="primary" className="mt-8" onClick={handleAccessoriesList}>
          {t("add_accessories")}
        </Button>
      </div>
      {isAccessoriesOpen && <AccessoriesSection carId={id} />}
    </div>
  );
};

export default CarInfo;
