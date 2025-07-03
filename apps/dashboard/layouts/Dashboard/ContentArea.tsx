import KYCBanner from "../../components/shared/KYCBanner/KYCBanner";
import { useAuth } from "../../contexts/AuthContext";

export const ContentArea: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  return (
    <section className="flex-1 flex flex-col min-h-0 lg:ml-60 pt-24 pb-10">
      <div className="flex-1 overflow-y-auto p-5 md:p-8">
        {(user?.kycStatus === "pending" || user?.kycStatus === "rejected") && (
          <KYCBanner />
        )}
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
};
