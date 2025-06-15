import { Button } from "@repo/ui/atoms";
import { notifyError, notifySuccess } from "@repo/ui/toasts";
import React from "react";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { OtpInput } from "@repo/ui/molecules";
import { FormHeader } from "../FormHeader/FormHeader";
import { postJSON } from "../../../lib/api";
import { AccountReadyModal } from "../AccountReadyModal/AccountReadyModal";

const VerifyEmail = ({ email }: { email: string }) => {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const [showAccountReady, setShowAccountReady] = React.useState(false);
  const router = useRouter();
  const { trigger, isMutating } = useSWRMutation<
    { message: string },
    Error,
    string
  >("/auth/resend-verification", (url) => postJSON(url, { email }), {
    revalidate: false,
  });

  const { trigger: verifyTrigger, isMutating: isVerifying } = useSWRMutation(
    "/auth/verify-email",
    (url, { arg }: { arg: { email: string; otp: string } }) =>
      postJSON(url, arg),
    { revalidate: false },
  );

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResendCode = async () => {
    try {
      const data = await trigger();
      notifySuccess(data?.message || "Code resent successfully");
    } catch (error) {
      notifyError(
        error instanceof Error ? error.message : "Resend code failed",
      );
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    try {
      const data = await verifyTrigger({ email, otp: otpString });
      notifySuccess(
        (data as unknown as { message: string })?.message ||
          "Code verified successfully",
      );
      setShowAccountReady(true);
    } catch (error) {
      notifyError(
        error instanceof Error ? error.message : "Verify code failed",
      );
    }
  };

  const handleProceed = () => {
    setShowAccountReady(false);
    router.push("/dashboard");
  };

  return (
    <div className="md:min-h-screen flex flex-col items-center bg-[#F4F7FB] w-full">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <FormHeader
          title="Verify your account"
          subtitle="The code was sent to your mail"
        />
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-6 items-center">
          <div className="w-full flex flex-col items-center">
            <label className="block text-left w-full text-[#23262F] text-sm font-nohemi font-medium mb-4">
              Enter OTP code
            </label>
            <OtpInput value={otp} onChange={handleChange} />
            <div className="text-base font-sans">
              Didn&apos;t receive the code?{" "}
              <Button
                variant="text"
                className="font-bold"
                onClick={handleResendCode}
                disabled={isMutating}
              >
                {isMutating ? "Resending..." : "Resend code"}
              </Button>
            </div>
          </div>
          <Button
            variant="primary"
            className="font-semibold w-full"
            onClick={handleVerify}
            isLoading={isVerifying}
            disabled={isVerifying}
          >
            Verify
          </Button>
        </div>
      </div>
      <AccountReadyModal open={showAccountReady} onProceed={handleProceed} />
    </div>
  );
};

export default VerifyEmail;
