"use client";

import { Button } from "@repo/ui/atoms";
import { Header } from "@repo/ui/molecules";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { swrFetcher } from "../../lib/fetcher";
import { SWRConfig } from "swr";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isSignIn = pathname === "/signin";

  return (
    <SWRConfig
      value={{
        fetcher: swrFetcher,
      }}
    >
      <div className="min-h-screen bg-[#F4F7FB]">
        <Header
          className="bg-white fixed top-0 z-10 w-full"
          button={
            <Link href={isSignIn ? "/account-type" : "/signin"}>
              <Button variant="primary" size="sm" className="font-semibold">
                {isSignIn ? "Create account" : "Login"}
              </Button>
            </Link>
          }
        />
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-24 py-12 pt-[165px]">
          {children}
        </div>
      </div>
    </SWRConfig>
  );
};
