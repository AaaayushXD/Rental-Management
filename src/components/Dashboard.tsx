import { GrettingCard } from "./GrettingCard";
import { UserNav } from "./Navbar";
import { RentCard } from "./RentCard";

export const Dashboard = () => {
  return (
    <div style={{ zIndex: 1 }} className="flex flex-col items-center justify-center w-full h-full px-3 py-2">
      <UserNav />
      <div className="flex items-center justify-center w-full h-full max-w-[2500px]">
        <div className="grid w-full h-full gap-8 px-4 md:grid-cols-3">
          <GrettingCard />
          <RentCard />
        </div>
      </div>
    </div>
  );
};
