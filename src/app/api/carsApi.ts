const API_URL = "http://localhost:3001";

export const getCarById = async (id: string) => {
  const response = await fetch(`${API_URL}/cars/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch car with id ${id}`);
  }
  return response.json();
};

export const getAllCars = async () => {
  const response = await fetch(`${API_URL}/cars`);
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  return response.json();
};
