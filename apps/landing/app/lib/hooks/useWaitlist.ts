import { useState } from "react";
import { joinWaitlist } from "../api/waitlist";

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
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail) {
      setError("Enter a valid email");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      await joinWaitlist(email);
      setEmail("");
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
