import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";

export const App: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-grow w-full h-full">
        <div className="fixed top-0 left-0">
          <Navbar />
        </div>
        <div className="top-0 w-full h-full scroll-smooth">
          <Dashboard />
        </div>
      </div>
    </>
  );
};
