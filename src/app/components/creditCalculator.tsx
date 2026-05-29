import { useState } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import useDataStore from "../store/useDataStore";
import AccessoriesSection from "./accessoriesSection";

const Finance = () => {
  const location = useLocation();
  const totalAccessoriesPrice = useDataStore(
    (state) =>
      state.cars[`car${location.state?.data.id}`]?.totalAccessoriesPrice
  );
  const carPriceFromState =
    +location.state?.data.price + parseFloat(totalAccessoriesPrice || "0");
  const carNameFromState = location.state?.data.name;
  const initialPrice = carPriceFromState || 30000;
  const [carPrice, setCarPrice] = useState<number>(initialPrice);
  const [firstPayment, setFirstPayment] = useState<number>(30);
  const [loanTerm, setLoanTerm] = useState<number>(72);
  const { t } = useTranslation("finance");

  const interestRateMap: { [key: number]: number } = {
    70: 0,
    60: 3,
    50: 4,
    40: 5,
    30: 6,
    20: 7,
  };

  const interestRate = interestRateMap[firstPayment] ?? 7;
  const loanAmount = carPrice - (carPrice * firstPayment) / 100;
  const monthlyInterestRate = interestRate / 100 / 12;

  const estimatedPayment =
    monthlyInterestRate === 0
      ? loanAmount / loanTerm
      : (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));

  const totalPayment = estimatedPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;
  const totalCarPrice = carPrice + totalInterest;

  return (
    <>
      <div className="flex flex-col gap-6 px-4 lg:flex-row lg:justify-center lg:gap-8 lg:px-6">
        <div className="w-full lg:w-1/2 lg:max-w-xl">
          <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            {carPriceFromState ? (
              <div className="flex flex-wrap items-baseline justify-between gap-2 text-base font-bold sm:text-lg">
                <span className="min-w-0">{carNameFromState}</span>
                <span className="shrink-0">${carPriceFromState}</span>
              </div>
            ) : (
              <div>
                <label
                  htmlFor="car-price-input"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("car_price")}:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter car price"
                  value={carPrice}
                  onChange={(e) => setCarPrice(Number(e.target.value) || 0)}
                  id="car-price-input"
                />
              </div>
            )}
          </div>
          <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{t("first_payment")}:</span>
              <span>{firstPayment}%</span>
            </div>

            <input
              type="range"
              min="20"
              max="70"
              step="10"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"
              value={firstPayment}
              onChange={(e) => setFirstPayment(parseInt(e.target.value))}
            />
            <div className="mt-2 flex flex-wrap justify-between gap-x-1 gap-y-1 text-xs text-gray-600 sm:text-sm">
              <span>20%</span>
              <span>30%</span>
              <span>40%</span>
              <span>50%</span>
              <span>60%</span>
              <span>70%</span>
            </div>
          </div>

          <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{t("loan_term")}:</span>
              <span>
                {loanTerm} {t("month")}
              </span>
            </div>
            <input
              type="range"
              min="12"
              max="84"
              step="12"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            />
            <div className="mt-2 flex flex-wrap justify-between gap-x-1 gap-y-1 text-xs text-gray-600 sm:text-sm">
              <span>12</span>
              <span>24</span>
              <span>36</span>
              <span>48</span>
              <span>60</span>
              <span>72</span>
              <span>84</span>
            </div>
          </div>

          <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{t("estimated_monthly_payment")}</span>
              <span className="text-lg font-bold text-blue-600">
                ${estimatedPayment.toFixed(2)}
              </span>
            </div>
          </div>

          <div>
            <h2 className="mt-10 text-center text-xl font-bold sm:mt-16 sm:text-2xl">
              {t("payment_details")}
            </h2>

            <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
              <div className="flex justify-between text-sm text-gray-600 ">
                <span>{t("interest_rate")}</span>
                <span className="text-lg font-bold text-blue-600">
                  {interestRate}%
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-4">
                <span>{t("total_loan_amount")}</span>
                <span className="text-lg font-bold text-blue-600">
                  ${loanAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-4">
                <span>{t("total_interest")}</span>
                <span className="text-lg font-bold text-blue-600">
                  ${totalInterest.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-4">
                <span>{t("total_car_price")}</span>
                <span className="text-lg font-bold text-blue-600">
                  ${totalCarPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        {location.state?.data.id && (
          <div className="w-full lg:w-1/3 lg:max-w-md">
            <AccessoriesSection carId={location.state?.data.id} />
          </div>
        )}
      </div>
    </>
  );
};

export default Finance;
