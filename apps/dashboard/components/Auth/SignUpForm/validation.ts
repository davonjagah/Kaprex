import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Full name or business name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirm: z.string().min(1, { message: "Please confirm your password" }),
    agreed: z.boolean().refine((value) => value, {
      message: "You must agree to the Terms & Privacy Policy",
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
