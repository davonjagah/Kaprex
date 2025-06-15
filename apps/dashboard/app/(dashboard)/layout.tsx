import { ReactNode } from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout/DashboardLayout";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
