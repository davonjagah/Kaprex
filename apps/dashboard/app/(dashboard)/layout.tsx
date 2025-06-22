import { ReactNode } from "react";
import DashboardLayout from "../layouts/Dashboard";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
