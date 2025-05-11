import Stake from "./widget/stake";
import { getStakePoolStats } from "./utils/stakePool";

const Home = async () => {
  const stats = await getStakePoolStats();

  return (
    <Stake
      stats={stats}
      linkHref="/unstake"
      linkText="Unstake SOL"
      title="Stake"
      token="sol"
    />
  );
};

export default Home;
