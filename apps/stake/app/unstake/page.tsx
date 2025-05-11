import { getStakePoolStats } from "../utils/stakePool";
import Stake from "../widget/stake";

const Unstake = async () => {
  const stats = await getStakePoolStats();

  return (
    <Stake
      stats={stats}
      linkHref="/"
      linkText="Stake SOL"
      title="Unstake"
      token="ksol"
    />
  );
};

export default Unstake;
