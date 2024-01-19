import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";

export const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-grow w-full h-full">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
};
