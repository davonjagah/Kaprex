import { redirect } from "next/navigation";

export default function FundRoot() {
  redirect("/fund/fund");
  return null;
}
