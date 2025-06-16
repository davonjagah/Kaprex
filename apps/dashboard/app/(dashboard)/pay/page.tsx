import TabSwitcher from "../../components/TabSwitcher";
import FAQCard from "../../components/FAQCard";
import PromoCard from "../../components/PromoCard";

export default function PayTabPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <TabSwitcher />
          <div className="bg-white rounded-2xl shadow p-8">
            Pay screen coming soon…
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:max-w-xs">
          <FAQCard />
          <PromoCard />
        </div>
      </div>
    </>
  );
}
