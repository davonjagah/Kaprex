"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { Button, Typography } from "@repo/ui/atoms";
import { notifyError, notifySuccess } from "@repo/ui/toasts";

const Join = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) {
      notifyError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      notifyError("Enter a valid email");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to join");
      }

      notifySuccess("You're in! We'll be in touch.");
      setEmail("");
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) {
        notifyError(err.message);
      } else {
        notifyError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-white p-6 md:p-16" id="join">
      <div
        style={{
          backgroundImage: "url('/images/cta-bg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" pt-6 px-7 lg:pl-16 lg:px-28 rounded-[30px] overflow-hidden container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-44"
      >
        <div className="w-full md:w-[400px] h-60 flex items-center justify-center">
          <Image
            src="/images/wallet.svg"
            alt="CTA Graphic"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
            }}
            className="w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Typography variant="body" className=" text-sm lg:text-base mb-2">
            Fast. Reliable. Non custodial
          </Typography>
          <Typography
            variant="h1"
            className="text-xl lg:text-4xl font-normal mb-4"
          >
            Ready to join the future of finance?
          </Typography>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4  py-2 rounded-full text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              variant="primary"
              size="sm"
              className="bg-[#00AA47] w-full md:w-[100px]"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Join"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
