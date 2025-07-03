import React from "react";
import { AuthLayout } from "../../layouts/Auth";

export default function AuthPage({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
