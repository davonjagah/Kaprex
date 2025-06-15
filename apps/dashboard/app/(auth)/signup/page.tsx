import { redirect } from "next/navigation";
import SignupForm from "../../components/Auth/SignUpForm/SignupForm";

interface SignupPageProps {
  searchParams: { accountType?: string };
}

const SignupPage = async ({ searchParams }: SignupPageProps) => {
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
