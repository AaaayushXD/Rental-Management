const latestBill = [
  {
    id: 1,
    month: "Poush",
    rent: "6000",
    electricity: "285",
    paidTo: "Aayush",
  },
  {
    id: 2,
    month: "Mangsir",
    rent: "7000",
    electricity: "185",
    paidTo: "Anish", 
  },
  {
    id: 3,
    month: "Kartik",
    rent: "5000",
    electricity: "205",
    paidTo: "Aayush",
  },
  {
    id: 4,
    month: "Kartik",
    rent: "5000",
    electricity: "205",
    paidTo: "Aayush",
  },
  {
    id: 5,
    month: "Kartik",
    rent: "5000",
    electricity: "205",
    paidTo: "Aayush",
  },
];
// const actualRent = 6000;

export const LatestTransaction: React.FC = () => {
  return (
    <div className="w-full h-full px-2 border border-[var(--border)] py-5">
      <h3 className="mb-5 text-lg font-bold  text-[var(--copy)]">
        Recent Transaction
      </h3>
      <div className="flex flex-col w-full gap-6 ">
        {latestBill &&
          latestBill.map((bills, index) => {
            return (
              <div className="grid gap-2 place-items-center" key={index}>
                {bills.month}
                <div className="grid grid-cols-2 gap-4 px-3">
                  <p className="flex flex-col items-start">
                    Rent Paid<span> Rs.{bills.rent}</span>
                  </p>
                  <p className="flex flex-col items-end">
                    Electricity<span> Rs.{bills.electricity}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
