import React from "react";
import { AuthLayout } from "../../layouts/Auth";
import RootProviders from "../../providers/RootProviders/RootProviders";

export default function AuthPage({ children }: { children: React.ReactNode }) {
  return (
    <RootProviders>
      <AuthLayout>{children}</AuthLayout>
    </RootProviders>
  );
}
