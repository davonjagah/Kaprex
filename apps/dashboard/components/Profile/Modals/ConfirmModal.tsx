import { Button, Typography } from "@repo/ui/atoms";
import { Modal } from "@repo/ui/molecules";

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  confirmText?: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  onConfirm,
  message,
  confirmText = "Yes",
}) => (
  <Modal open={open} onClose={onClose} showCloseButton={false}>
    <div className="p-8 md:pt-20 md:pb-16 md:px-12 flex flex-col items-center gap-4">
      <Typography
        variant="h2"
        className="font-nohemi text-4xl font-normal text-center"
      >
        Are you sure?
      </Typography>
      <Typography
        variant="body"
        className="text-[#7F839F] font-nohemi text-center max-w-80"
      >
        {message}
      </Typography>
      <div className="flex gap-4 mt-4">
        <Button
          variant="outline"
          className="rounded-full px-8 py-2 w-32"
          onClick={onConfirm}
        >
          {confirmText}
        </Button>
        <Button variant="primary" onClick={onClose} className="w-32">
          No
        </Button>
      </div>
    </div>
  </Modal>
);
