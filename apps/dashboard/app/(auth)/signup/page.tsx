import { redirect } from "next/navigation";
import SignupForm from "../../../components/Auth/SignUpForm/SignupForm";

const SignupPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ accountType?: string }>;
}) => {
  const accountType = (await searchParams).accountType;

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
