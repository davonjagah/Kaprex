import React from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

export default function AuthPage({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
