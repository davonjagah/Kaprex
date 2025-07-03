"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PromoCard = () => (
  <Link href="/" className="rounded-2xl text-white flex flex-col gap-4">
    <Image
      src="/images/buy-and-sell.png"
      alt="Promo Card"
      width={100}
      height={347}
      quality={100}
      style={{
        width: "100%",
      }}
    />
  </Link>
);

export default PromoCard;
