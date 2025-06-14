"use client";

import Link from "next/link";
import { Button, Typography } from "@repo/ui/atoms";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F7FB] px-4">
      <div className="text-center">
        <Typography
          variant="h1"
          className="text-[96px] font-nohemi text-[#FF5500] mb-2"
        >
          404
        </Typography>
        <Typography variant="h2" className="font-nohemi text-3xl mb-4">
          Page Not Found
        </Typography>
        <Typography variant="body" className="text-[#6F6C90] mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </Typography>
        <Link href="/">
          <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white rounded-full px-8 py-3 font-nohemi text-base">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
