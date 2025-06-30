import {
  VirtualAccountsIcon,
  VirtualCardsIcon,
  PassiveIncomeIcon,
  MerchantIcon,
} from "@repo/ui/icons";
import React from "react";
import FeatureCard from "../../shared/FeatureCard/FeatureCard";

const Features = () => {
  return (
    <>
      <FeatureCard
        title="Virtual Accounts"
        description="Receive global payments in fiat and crypto, seamlessly settled in Ghanaian Cedis across multiple platforms with Kaprex"
        linkText="Go to Virtual accounts >"
        linkUrl="#"
        icon={<VirtualAccountsIcon className="w-full md:w-1/2" />}
        className="md:gap-32 md:py-7 md:pl-8 md:pr-20"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Virtual Cards"
          description="Spend worldwide with Kaprex virtual cards at globally accepted vendors."
          linkText="Go to cards >"
          linkUrl="#"
          icon={<VirtualCardsIcon />}
          isComingSoon
        />
        <FeatureCard
          title="Earn Passive income"
          description="Earn Passive Income with Kaprex through DeFi—secure, stable, and
            always in your control."
          linkText="Go to Earn >"
          linkUrl="#"
          icon={<PassiveIncomeIcon />}
        />
      </div>

      <FeatureCard
        title="Merchant"
        description="Receive global payments in fiat and crypto, seamlessly settled in Ghanaian Cedis across multiple platforms with Kaprex"
        linkText="Go to Merchant >"
        linkUrl="#"
        icon={<MerchantIcon className="w-full md:w-1/2" />}
        className="md:gap-32 md:py-7 md:pl-8 md:pr-20"
      />
    </>
  );
};

export default Features;
