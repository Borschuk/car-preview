import { useQuery } from "@tanstack/react-query";
import CarItem from "./carItem";
import type { Cars } from "../types/dataTypes";
import { getAllCars } from "../api/carsApi";
import { useTranslation } from "react-i18next";

const CarsSection = () => {
  const { data } = useQuery<Cars[]>({
    queryKey: ["cars"],
    queryFn: getAllCars,
  });

  const { i18n } = useTranslation();
  const currentLang: string = i18n.language || "en";

  return (
    <section className="px-2 sm:px-4">
      {data?.map((car) => (
        <CarItem
          key={car.id}
          imageUrl={car.image}
          describe={car.describe[currentLang]}
          id={car.id}
          name={car.name}
        />
      ))}
    </section>
  );
};

export default CarsSection;
