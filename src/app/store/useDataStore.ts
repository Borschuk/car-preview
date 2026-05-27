import { create } from "zustand";
import type { DataStore } from "../types/dataTypes";

const useDataStore = create<DataStore>((set) => ({
  cars: {
    car1: {
      accessories: [
        {
          id: "acc1",
          nameAcc: "Accessory 1",
          price: "50$",
          description: "Description for Accessory 1",
          added: false,
        },
        {
          id: "acc2",
          nameAcc: "Accessory 2",
          price: "75$",
          description: "Description for Accessory 2",
          added: false,
        },
        {
          id: "acc3",
          nameAcc: "Accessory 3",
          price: "100$",
          description: "Description for Accessory 3",
          added: false,
        },
      ],
      totalAccessoriesPrice: "0",
    },
    car2: {
      accessories: [
        {
          id: "acc1",
          nameAcc: "Accessory 1",
          price: "50$",
          description: "Description for Accessory 1",
          added: false,
        },
        {
          id: "acc2",
          nameAcc: "Accessory 2",
          price: "75$",
          description: "Description for Accessory 2",
          added: false,
        },
        {
          id: "acc3",
          nameAcc: "Accessory 3",
          price: "100$",
          description: "Description for Accessory 3",
          added: false,
        },
      ],
      totalAccessoriesPrice: "0",
    },
    car3: {
      accessories: [
        {
          id: "acc1",
          nameAcc: "Accessory 1",
          price: "50$",
          description: "Description for Accessory 1",
          added: false,
        },
        {
          id: "acc2",
          nameAcc: "Accessory 2",
          price: "75$",
          description: "Description for Accessory 2",
          added: false,
        },
        {
          id: "acc3",
          nameAcc: "Accessory 3",
          price: "100$",
          description: "Description for Accessory 3",
          added: false,
        },
      ],
      totalAccessoriesPrice: "0",
    },
  },

  chooseAcc: (carId: string, accId: string) => {
    set((state) => {
      const targetCar = state.cars[carId];
      if (!targetCar) return {} as Partial<typeof state>;

      const updatedCar = {
        ...targetCar,
        accessories: targetCar.accessories.map((acc) =>
          acc.id === accId ? { ...acc, added: true } : acc,
        ),
      };

      return { cars: { ...state.cars, [carId]: updatedCar } } as Partial<
        typeof state
      >;
    });
  },
  removeAcc: (carId: string, accId: string) => {
    set((state) => {
      const targetCar = state.cars[carId];
      if (!targetCar) return {} as Partial<typeof state>;

      const updatedCar = {
        ...targetCar,
        accessories: targetCar.accessories.map((acc) =>
          acc.id === accId ? { ...acc, added: false } : acc,
        ),
      };

      return { cars: { ...state.cars, [carId]: updatedCar } } as Partial<
        typeof state
      >;
    });
  },
  countTotalAccessoriesPrice: (carId: string) => {
    set((state) => {
      const targetCar = state.cars[carId];
      if (!targetCar) return {} as Partial<typeof state>;

      const updatedCar = {
        ...targetCar,
        totalAccessoriesPrice: targetCar.accessories
          .filter((acc) => acc.added)
          .reduce((sum, acc) => sum + parseFloat(acc.price.replace("$", "")), 0)
          .toFixed(2),
      };

      return { cars: { ...state.cars, [carId]: updatedCar } } as Partial<
        typeof state
      >;
    });
  },
}));

export default useDataStore;
