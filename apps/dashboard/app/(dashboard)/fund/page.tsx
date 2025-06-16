import TabSwitcher from "../../components/TabSwitcher";
import FundStepper from "../../components/FundStepper";
import FAQCard from "../../components/FAQCard";
import PromoCard from "../../components/PromoCard";

export default function FundTabPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 max-w-2/3">
          <TabSwitcher />
          <FundStepper />
        </div>
        <div className="flex flex-col gap-6 w-1/3">
          <FAQCard />
          <PromoCard />
        </div>
      </div>
    </>
  );
}
