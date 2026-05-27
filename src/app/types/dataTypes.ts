export type Specifications = {
  engine: string;
  horsepower: string;
  torque: string;
  transmission: string;
  drivetrain: string;
  fuelEconomy: string;
};

export type Cars = {
  id: string;
  image: string;
  describe: {
    [key: string]: string;
  };
  type: string;
  name: string;
  price: string;
  specifications: Specifications;
};

export type Accessories = {
  [key: string]: {
    accessories: Accessory[];
    totalAccessoriesPrice: string;
  };
};

export type Accessory = {
  id: string;
  nameAcc: string;
  price: string;
  description: string;
  added: boolean;
};

export type DataStore = {
  cars: Accessories;
  chooseAcc: (carId: string, accId: string) => void;
  removeAcc: (carId: string, accId: string) => void;
  countTotalAccessoriesPrice: (carId: string) => void;
};
