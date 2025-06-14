import { redirect } from "next/navigation";
import SignupForm from "./SignupForm";

interface SignupPageProps {
  searchParams: { accountType?: string };
}

const SignupPage = ({ searchParams }: SignupPageProps) => {
  const accountType = searchParams.accountType;

  if (!accountType || !["individual", "business"].includes(accountType)) {
    redirect("/account-type");
  }

  return (
    <>
      <SignupForm accountType={accountType} />
    </>
  );
};

export default SignupPage;
