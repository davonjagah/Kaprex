"use client";

import React, { useState, useCallback } from "react";
import { Button, Typography } from "@repo/ui/atoms";
import Link from "next/link";
import { notifyError } from "@repo/ui/toasts";
import { useForm } from "react-hook-form";
import { FormField } from "@repo/ui/molecules";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, SignInFormValues } from "./validation";
import FormCard from "../FormCard/FormCard";
import VerifyEmail from "../VerifyEmail/VerifyEmail";
import api from "../../../lib/api";

const SignInForm: React.FC = () => {
  const [step, setStep] = useState<"signin" | "verify">("signin");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Omit<SignInFormValues, "remember">>({
    resolver: zodResolver(signinSchema.omit({ remember: true })),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  const onSubmit = useCallback(
    async ({ email, password }: Omit<SignInFormValues, "remember">) => {
      try {
        const { data } = await api.post(`/auth/login`, {
          email,
          password,
        });
        const error = data?.message;

        if (error && error !== "OTP_REQUIRED") {
          notifyError(error);
          return;
        }

        setCredentials({ email, password });
        setStep("verify");
      } catch (err: unknown) {
        notifyError(err instanceof Error ? err.message : "Sign in failed");
      }
    },
    [],
  );

  if (step === "verify") {
    return (
      <VerifyEmail
        type="login"
        email={credentials.email}
        password={credentials.password}
      />
    );
  }

  return (
    <FormCard title="Welcome Back!">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormField
          name="email"
          control={control}
          label="Email"
          placeholder="example@gmail.com"
          type="email"
          required
        />
        <FormField
          name="password"
          control={control}
          label="Password"
          type="password"
          required
        />
        <div className="flex items-center justify-between">
          <div />
          <Link
            href="/forgot-password"
            className="text-primary font-medium hover:underline text-base font-nohemi"
          >
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          variant="primary"
          className="font-semibold mt-4 w-full"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Login
        </Button>
        <Typography
          variant="body"
          className="text-center mt-4 font-sans text-[#1F1F1F]"
        >
          New here?{" "}
          <Link
            href="/account-type"
            className="text-primary font-semibold hover:underline tracking-tight"
          >
            Create an account
          </Link>
        </Typography>
      </form>
    </FormCard>
  );
};

export default SignInForm;
