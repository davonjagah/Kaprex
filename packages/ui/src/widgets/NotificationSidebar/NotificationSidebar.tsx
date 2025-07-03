import React from "react";
import { X } from "lucide-react";
import { Button } from "@repo/ui/atoms";

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  type?: "info" | "success" | "warning" | "error";
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface NotificationSidebarProps {
  notifications: Notification[];
  onClose: () => void;
  onClearAll?: () => void;
  onDismiss?: (id: string) => void;
  className?: string;
}

const NotificationSidebar: React.FC<NotificationSidebarProps> = ({
  notifications,
  onClose,
  onClearAll,
  onDismiss,
  className = "",
}) => {
  const getTypeColor = (type?: Notification["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-50 text-green-700";
      case "warning":
        return "bg-yellow-50 text-yellow-700";
      case "error":
        return "bg-red-50 text-red-700";
      default:
        return "bg-blue-50 text-blue-700";
    }
  };

  return (
    <div className={`h-full flex flex-col bg-white ${className}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="flex items-center gap-2">
          {onClearAll && notifications.length > 0 && (
            <Button
              variant="text"
              size="sm"
              onClick={onClearAll}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear all
            </Button>
          )}
          <Button
            variant="text"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            No notifications
          </div>
        ) : (
          <div className="divide-y">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 ${getTypeColor(notification.type)}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-medium">{notification.title}</h3>
                    <p className="text-sm mt-1">{notification.message}</p>
                    <p className="text-xs mt-2 opacity-75">
                      {notification.timestamp.toLocaleString()}
                    </p>
                    {notification.action && (
                      <Button
                        variant="text"
                        size="sm"
                        onClick={notification.action.onClick}
                        className="mt-2 p-0 h-auto"
                      >
                        {notification.action.label}
                      </Button>
                    )}
                  </div>
                  {onDismiss && (
                    <Button
                      variant="text"
                      size="sm"
                      onClick={() => onDismiss(notification.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={16} />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationSidebar;
