import useDataStore from "../store/useDataStore";
import Button from "./button";

const AccessoriesSection = ({ carId }: { carId: string }) => {
  const storeId = `car${carId}`;
  const accessories = useDataStore((state) => state.cars[storeId]?.accessories);

  const addAccessory = (carId: string, accId: string) => {
    useDataStore.getState().chooseAcc(carId, accId);
    useDataStore.getState().countTotalAccessoriesPrice(carId);
  };

  const removeAccessory = (carId: string, accId: string) => {
    useDataStore.getState().removeAcc(carId, accId);
    useDataStore.getState().countTotalAccessoriesPrice(carId);
  };

  return (
    <>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-xl font-bold text-center">Accessories</h2>
        {accessories?.map((accessory) => (
          <div
            key={accessory.id}
            className="flex flex-col gap-3 border p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:p-2"
          >
            <div className="min-w-0 flex-1 space-y-1">
              <p className="font-semibold text-gray-900">{accessory.nameAcc}</p>
              <p className="text-sm text-gray-600">{accessory.description}</p>
              <p className="text-sm font-medium text-brand">
                {accessory.price}
              </p>
            </div>
            {!accessory.added && (
              <Button
                type="primary"
                className="w-full shrink-0 sm:w-auto"
                onClick={() => addAccessory(storeId, accessory.id)}
              >
                Add
              </Button>
            )}
            {accessory.added && (
              <Button
                type="secondary"
                className="w-full shrink-0 sm:w-auto"
                onClick={() => removeAccessory(storeId, accessory.id)}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AccessoriesSection;
