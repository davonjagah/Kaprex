import FundStepper from "../../components/FundStepper";
import FAQCard from "../../components/FAQCard";
import PromoCard from "../../components/PromoCard";
import TransactionTabSwitcher from "../../components/shared/TransactionTabSwitcher/TransactionTabSwitcher";

export default function FundTabPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 lg:max-w-2/3">
          <TransactionTabSwitcher />
          <FundStepper />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-6 lg:w-1/3">
          <FAQCard />
          <PromoCard />
        </div>
      </div>
    </>
  );
}
