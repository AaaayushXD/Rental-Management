export const GrettingCard: React.FC = () => {
  return (
    <div className="w-full h-full px-4 py-3 border border-[var(--border)] rounded   flex justify-start items-center col-span-2">
      <div className="flex flex-col gap-3 tracking-wide text-[var(--primary-content)] px-2 py-3 justify-center flex-wrap">
        <h3 className="text-xl text-[var(--primary-color)]">Welcome, </h3>
        <p className="text-3xl font-bold ">Mr/Mrs something</p>
      </div>
    </div>
  );
};
