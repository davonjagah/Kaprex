import { useState } from "react";
import { joinWaitlist } from "../api/waitlist";
import { notifyError } from "@repo/ui/toasts";

interface UseWaitlistResult {
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
  error: string | null;
  handleSubmit: () => Promise<void>;
  isValidEmail: boolean;
}

export function useWaitlist(): UseWaitlistResult {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  const handleSubmit = async () => {
    if (!isValidEmail) {
      notifyError("Enter a valid email");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      await joinWaitlist(email);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    error,
    handleSubmit,
    isValidEmail,
  };
}
