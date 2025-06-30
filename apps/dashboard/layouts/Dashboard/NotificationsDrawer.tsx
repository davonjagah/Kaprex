import {
  SidebarOverlay,
  NotificationSidebar,
  type Notification,
} from "@repo/ui/widgets";

export const NotificationsDrawer: React.FC<{
  open: boolean;
  notifications: Notification[];
  onClose(): void;
  onClearAll(): void;
  onDismiss(id: string): void;
}> = ({ open, notifications, onClose, onClearAll, onDismiss }) => (
  <SidebarOverlay
    open={open}
    onClose={onClose}
    position="right"
    widthClass="w-80"
  >
    <NotificationSidebar
      notifications={notifications}
      onClose={onClose}
      onClearAll={onClearAll}
      onDismiss={onDismiss}
    />
  </SidebarOverlay>
);
