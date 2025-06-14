import { ReactNode } from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
