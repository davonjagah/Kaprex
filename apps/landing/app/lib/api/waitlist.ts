interface WaitlistResponse {
  success: boolean;
  message: string;
}

export async function joinWaitlist(email: string): Promise<WaitlistResponse> {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to join waitlist");
  }

  return data;
}
