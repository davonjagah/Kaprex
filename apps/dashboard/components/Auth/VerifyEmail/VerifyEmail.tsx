"use client";

import { Button } from "@repo/ui/atoms";
import { notifyError, notifySuccess } from "@repo/ui/toasts";
import React from "react";
import useSWRMutation from "swr/mutation";
import { OtpInput } from "@repo/ui/molecules";
import { FormHeader } from "../FormHeader/FormHeader";
import { AccountReadyModal } from "../AccountReadyModal/AccountReadyModal";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import api from "../../../lib/api";
import LoadingModal from "../../shared/Modals/LoadingModal";

const VerifyEmail = ({
  email,
  type,
  password,
}: {
  email: string;
  type: "login" | "signup";
  password?: string;
}) => {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const [showAccountReady, setShowAccountReady] = React.useState(false);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation<
    { message: string },
    Error,
    string
  >("/auth/resend-verification", (url) => api.post(url, { email }), {
    revalidate: false,
  });

  const { trigger: verifyTrigger, isMutating: isVerifying } = useSWRMutation(
    "/auth/verify-email",
    (url, { arg }: { arg: { email: string; otp: string } }) =>
      api.post(url, arg),
    { revalidate: false },
  );

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // If all fields are filled and not already verifying, auto-verify
    if (
      newOtp.every((digit) => digit.length === 1) &&
      !isVerifying &&
      !isLoggingIn
    ) {
      handleVerify(newOtp);
    }
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
  const handleVerify = async (otpArray?: string[]) => {
    const otpString = (otpArray ?? otp).join("");
    setIsLoggingIn(true);
    try {
      const response =
        type === "login" && password
          ? await api.post(`/auth/login`, {
              email,
              password,
              loginOTP: otpString,
            })
          : await verifyTrigger({ email, otp: otpString });

      const { message = "Code verified successfully" } = response as {
        message?: string;
      };

      notifySuccess(message);
      if (type === "signup") {
        setShowAccountReady(true);
      } else {
        router.refresh();
        router.push("/");
        setIsLoggingIn(false);
      }
    } catch (err: unknown) {
      const msg =
        err instanceof AxiosError
          ? err.response?.data.message
          : "Verify code failed";
      notifyError(msg);
      setIsLoggingIn(false);
    }
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
            onClick={() => handleVerify()}
            isLoading={isVerifying || isLoggingIn}
            disabled={isVerifying || isLoggingIn}
          >
            Verify
          </Button>
        </div>
      </div>
      {type === "signup" ? (
        <AccountReadyModal open={showAccountReady} />
      ) : (
        <LoadingModal
          title="Logging in"
          description="Hang on while we log you in"
          open={isLoggingIn}
        />
      )}
    </div>
  );
};

export default VerifyEmail;
