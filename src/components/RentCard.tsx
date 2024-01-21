export const RentCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-4 rounded bg-gradient-to-tr from-[var(--primary-color)] from-35% to-[var(--primary-dark)] shadow-md shadow-[var(--primary-light)] ">
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 px-3 py-4">
        <h4 className="text-lg">Rent:</h4>
        <p className="text-4xl font-bold tracking-wide text-[var(--secondary-content)]">
          Rs. 6000
        </p>
      </div>
    </div>
  );
};
