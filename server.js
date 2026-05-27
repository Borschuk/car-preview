import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Car preview server is running");
});

// Sample cars data
let cars = [
  {
    id: "1",
    type: "Base",
    name: "Skoda Kodiaq",
    price: "30000",
    image: "/src/assets/images/car-type-1.webp",
    describe: {
      en: "The Skoda Kodiaq is a mid-size crossover SUV produced by the Czech automaker Skoda Auto. It was first introduced in 2016 and is named after the Kodiak bear, which is native to the Kodiak Archipelago in Alaska.",
      ua: "Skoda Kodiaq - це середньорозмірний кросовер, вироблений чеським автовиробником Skoda Auto. Він був вперше представлений у 2016 році і названий на честь ведмедя Кодиак, який є рідним для архіпелагу Кодиак в Алясці.",
    },
    specifications: {
      engine: "2.0 TSI",
      horsepower: "190",
      torque: "320",
      transmission: "7-speed DSG",
      drivetrain: "AWD",
      fuelEconomy: "7.5 L/100km",
    },
  },
  {
    id: "2",
    type: "Sportline",
    name: "Skoda Kodiaq Sportline",
    price: "35000",
    image: "/src/assets/images/car-type-2.webp",
    describe: {
      en: "The Skoda Kodiaq Sportline is a premium variant of the Skoda Kodiaq, offering enhanced features and performance.",
      ua: "Skoda Kodiaq Sportline - це преміальна версія Skoda Kodiaq, яка пропонує покращені функції та продуктивність.",
    },
    specifications: {
      engine: "2.0 TSI",
      horsepower: "200",
      torque: "340",
      transmission: "7-speed DSG",
      drivetrain: "AWD",
      fuelEconomy: "8.0 L/100km",
    },
  },
  {
    id: "3",
    type: "RS",
    name: "Skoda Kodiaq RS",
    price: "40000",
    image: "/src/assets/images/car-type-3.webp",
    describe: {
      en: "The Skoda Kodiaq RS is the high-performance version of the Skoda Kodiaq, featuring a more powerful engine and sportier design elements.",
      ua: "Skoda Kodiaq RS - це високопродуктивна версія Skoda Kodiaq, яка має більш потужний двигун та спортивні елементи дизайну.",
    },
    specifications: {
      engine: "2.0 TSI",
      horsepower: "245",
      torque: "370",
      transmission: "7-speed DSG",
      drivetrain: "AWD",
      fuelEconomy: "8.5 L/100km",
    },
  },
];

// Routes
app.get("/cars", (req, res) => {
  res.json(cars);
});

app.get("/cars/:id", (req, res) => {
  const car = cars.find((c) => c.id === req.params.id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
