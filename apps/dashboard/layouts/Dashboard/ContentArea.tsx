import KYCBanner from "../../components/shared/KYCBanner/KYCBanner";

export const ContentArea: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <section className="flex-1 flex flex-col min-h-0 lg:ml-60 pt-24 pb-10">
    <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
      <KYCBanner />
      {children}
    </div>
  </section>
);
