import { ReactNode } from "react";
import RootProviders from "../../providers/RootProviders/RootProviders";
import DashboardLayout from "../../layouts/Dashboard";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RootProviders>
      <DashboardLayout>{children}</DashboardLayout>
    </RootProviders>
  );
}
