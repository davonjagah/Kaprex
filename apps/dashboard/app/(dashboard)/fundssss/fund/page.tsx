import TabSwitcher from "../TabSwitcher";
import FundStepper from "../../../components/FundStepper";
import FAQCard from "../../../components/FAQCard";
import PromoCard from "../../../components/PromoCard";

export default function FundTabPage() {
  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <TabSwitcher />
          <FundStepper />
        </div>
        <div className="flex flex-col gap-6 w-full lg:max-w-xs">
          <FAQCard />
          <PromoCard />
        </div>
      </div>
    </div>
  );
}
