"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { Button, Typography } from "@repo/ui/atoms";
import { useWaitlist } from "../../lib/hooks/useWaitlist";

export function Join() {
  const { email, setEmail, isLoading, error, handleSubmit } = useWaitlist();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className="text-white p-6 md:p-16" id="join">
      <div
        style={{
          backgroundImage: "url('/images/cta-bg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="pt-6 px-7 lg:pl-16 lg:px-28 rounded-[30px] overflow-hidden container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-44"
      >
        <div className="w-full md:w-[400px] h-60 flex items-center justify-center">
          <Image
            src="/images/wallet.svg"
            alt="Wallet illustration"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
            }}
            className="w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Typography variant="body" className="text-sm lg:text-base mb-2">
            Fast. Reliable. Non custodial
          </Typography>
          <Typography
            variant="h1"
            className="text-xl lg:text-4xl font-normal mb-4"
          >
            Ready to join the future of finance?
          </Typography>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:w-auto flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-full text-black`}
                value={email}
                onChange={handleEmailChange}
                aria-invalid={!!error}
                aria-describedby={error ? "email-error" : undefined}
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="bg-[#00AA47] w-full md:w-[100px]"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? (
                <Loader2
                  className="animate-spin w-5 h-5"
                  aria-label="Loading"
                />
              ) : (
                "Join"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
