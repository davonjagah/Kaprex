import { useState, useCallback } from "react";
import type { Notification } from "@repo/ui/widgets";

const DEFAULT: Notification[] = [
  {
    id: "1",
    title: "Transaction Complete",
    message: "Your SOL stake has been processed successfully",
    timestamp: new Date(),
    type: "success",
    action: {
      label: "View Details",
      onClick: () => console.log("View details clicked"),
    },
  },
];

export function useNotifications() {
  const [items, setItems] = useState<Notification[]>(DEFAULT);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const clearAll = useCallback(() => setItems([]), []);
  const dismiss = useCallback((id: string) => {
    setItems((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return { items, clearAll, dismiss, isSidebarOpen, setIsSidebarOpen };
}
