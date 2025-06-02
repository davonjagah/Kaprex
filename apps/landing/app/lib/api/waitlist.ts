import { notifyError, notifySuccess } from "@repo/ui/toasts";

export async function joinWaitlist(email: string) {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    notifyError(data.message);
    return;
  }

  notifySuccess(data.message);
}
