import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NotificationSidebar from "./NotificationSidebar";
import type { Notification } from "./NotificationSidebar";

const meta: Meta<typeof NotificationSidebar> = {
  title: "Widgets/NotificationSidebar",
  component: NotificationSidebar,
  tags: ["autodocs"],
  argTypes: {
    notifications: { control: false },
    onClose: { action: "closed" },
    onClearAll: { action: "cleared all" },
    onDismiss: { action: "dismissed" },
    className: { control: "text" },
  },
};

export default meta;

const sampleNotifications: Notification[] = [
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
  {
    id: "2",
    title: "New Feature Available",
    message: "Check out our new staking rewards program",
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    type: "info",
    action: {
      label: "Learn More",
      onClick: () => console.log("Learn more clicked"),
    },
  },
  {
    id: "3",
    title: "Low Balance Warning",
    message: "Your SOL balance is running low",
    timestamp: new Date(Date.now() - 7200000), // 2 hours ago
    type: "warning",
  },
  {
    id: "4",
    title: "Transaction Failed",
    message: "Failed to process your unstake request",
    timestamp: new Date(Date.now() - 10800000), // 3 hours ago
    type: "error",
    action: {
      label: "Try Again",
      onClick: () => console.log("Try again clicked"),
    },
  },
];

const singleNotification: Notification = {
  id: "1",
  title: "Transaction Complete",
  message: "Your SOL stake has been processed successfully",
  timestamp: new Date(),
  type: "success",
  action: {
    label: "View Details",
    onClick: () => console.log("View details clicked"),
  },
};

export const WithNotifications: StoryObj = {
  render: (args) => (
    <div className="h-screen bg-gray-100">
      <NotificationSidebar
        {...args}
        notifications={sampleNotifications}
        onClose={() => {}}
      />
    </div>
  ),
  name: "With Notifications",
};

export const EmptyState: StoryObj = {
  render: (args) => (
    <div className="h-screen bg-gray-100">
      <NotificationSidebar {...args} notifications={[]} onClose={() => {}} />
    </div>
  ),
  name: "Empty State",
};

export const SingleNotification: StoryObj = {
  render: (args) => (
    <div className="h-screen bg-gray-100">
      <NotificationSidebar
        {...args}
        notifications={[singleNotification]}
        onClose={() => {}}
      />
    </div>
  ),
  name: "Single Notification",
};
