import TabSwitcher from "../TabSwitcher";
import FAQCard from "../../../components/FAQCard";
import PromoCard from "../../../components/PromoCard";

export default function BuyCryptoTabPage() {
  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <TabSwitcher />
          <div className="bg-white rounded-2xl shadow p-8">
            Buy Crypto screen coming soon…
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:max-w-xs">
          <FAQCard />
          <PromoCard />
        </div>
      </div>
    </div>
  );
}
