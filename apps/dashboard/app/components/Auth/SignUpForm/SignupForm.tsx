"use client";

import React, { useState } from "react";
import { Button, Checkbox, Typography } from "@repo/ui/atoms";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm, Controller } from "react-hook-form";
import { FormField } from "@repo/ui/molecules";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifyError } from "@repo/ui/toasts";
import FormCard from "../FormCard/FormCard";
import VerifyEmail from "../VerifyEmail/VerifyEmail";
import { SignupFormValues, signupSchema } from "./validation";

interface SignupFormProps {
  accountType: string;
}

const SignupForm = ({ accountType }: SignupFormProps) => {
  const [step, setStep] = useState<"signup" | "verify">("signup");
  const [email, setEmail] = useState("");

  const onSignUpSuccess = (userEmail: string) => {
    setEmail(userEmail);
    setStep("verify");
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      agreed: false,
    },
    mode: "onChange",
  });

  const tab = accountType === "business" ? "business" : "individual";

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const result = await signIn("signup", {
        name: data.name,
        email: data.email,
        password: data.password,
        customerType: accountType,
        redirect: false,
      });
      console.log(result, "result");
      if (result?.error) {
        notifyError(result.error);
        return;
      }
      onSignUpSuccess(data.email);
    } catch (error) {
      notifyError(
        error instanceof Error
          ? error.message
          : "An error occurred during signup",
      );
    }
  };

  if (step === "verify") {
    return <VerifyEmail email={email} />;
  }

  return (
    <FormCard
      title="Create your Kaprex account"
      subtitle="Let us get to know you!"
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormField
          name="name"
          control={control}
          label={tab === "business" ? "Business Name" : "Full Name"}
          placeholder={tab === "business" ? "Business Name" : "Full Name"}
          required
        />
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
        <FormField
          name="confirm"
          control={control}
          label="Confirm Password"
          type="password"
          required
        />
        <Controller
          name="agreed"
          control={control}
          rules={{ required: "You must agree to the Terms & Privacy Policy" }}
          render={({ field, fieldState }) => (
            <Checkbox
              checked={!!field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              label="I agree to the Terms & Privacy Policy"
              labelClassName="text-sm italic text-[#64748B] font-sans"
              error={fieldState.error?.message}
              required
              ref={field.ref}
            />
          )}
        />
        <Button
          type="submit"
          className="font-semibold mt-4 w-full"
          variant="primary"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Create account
        </Button>
        <Typography
          variant="body"
          className="text-center mt-4 font-sans text-[#1F1F1F]"
        >
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </Typography>
      </form>
    </FormCard>
  );
};

export default SignupForm;
