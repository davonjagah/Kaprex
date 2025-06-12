"use client";

import { getCsrfToken, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

export default function SignIn() {
  const [csrfToken, setCsrfToken] = useState<string>("");

  useEffect(() => {
    (async () => {
      const token = await getCsrfToken();
      setCsrfToken(token || "");
    })();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    await signIn("credentials", {
      email: target.email.value,
      password: target.password.value,
      callbackUrl: "/dashboard", // redirect after successful login
    });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email: <input name="email" type="text" />
      </label>
      <label>
        Password: <input name="password" type="password" />
      </label>
      <button type="submit">Sign In</button>
      <hr />
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </form>
  );
}
