import StakeForm from "../components/StakeForm";
import StatsCard from "../components/StatsCard";

const Unstake = () => {
  return (
    <>
      <main className=" min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 justify-center py-12 md:py-21">
          <StakeForm
            linkHref="/"
            linkText="Stake SOL"
            title="Unstake"
            token="ksol"
          />
          <StatsCard />
        </div>
      </main>
    </>
  );
};

export default Unstake;
