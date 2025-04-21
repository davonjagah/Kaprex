"use client";

import { Header } from "@repo/ui/molecules";
import Link from "next/link";
import React from "react";

const HeaderWrapper = () => {
  return (
    <header>
      <Header
        onButtonClick={() => console.log("hello")}
        LinkComponent={({ children }) => <Link href="/">{children}</Link>}
      />
    </header>
  );
};

export default HeaderWrapper;
