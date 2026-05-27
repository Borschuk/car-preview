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
            className="flex gap-2 border items-center p-2 w-full justify-between"
          >
            <span>{accessory.nameAcc}</span>
            <span>{accessory.price}</span>
            <span>{accessory.description}</span>
            {!accessory.added && (
              <Button
                type="primary"
                onClick={() => addAccessory(storeId, accessory.id)}
              >
                Add
              </Button>
            )}
            {accessory.added && (
              <Button
                type="secondary"
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
