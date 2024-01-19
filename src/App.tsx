import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";

export const App: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-full gap-2">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
};
