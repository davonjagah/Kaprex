import React from "react";
import { Modal } from "@repo/ui/molecules";
import { Typography, Button } from "@repo/ui/atoms";

interface LoadingModalProps {
  open: boolean;
  onBack?: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({
  open,
  onBack,
  title,
  description,
  buttonText,
}) => (
  <Modal open={open} showCloseButton={false}>
    <div className="flex flex-col items-center text-center p-8 md:py-[68px] md:px-[88px] justify-center mx-auto">
      <span className="mb-8 flex items-center justify-center">
        <svg
          className="animate-spin-slow"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="8" r="6" fill="#FF5500" />
          <circle cx="50" cy="14" r="4.5" fill="#FF5500" />
          <circle cx="56" cy="32" r="3.5" fill="#FF5500" />
          <circle cx="50" cy="50" r="3" fill="#FF5500" />
          <circle cx="32" cy="56" r="2.5" fill="#FF5500" />
          <circle cx="14" cy="50" r="2" fill="#FF5500" />
          <circle cx="8" cy="32" r="1.5" fill="#FF5500" />
          <circle cx="14" cy="14" r="2.5" fill="#FF5500" />
        </svg>
      </span>
      <Typography
        variant="h2"
        className="text-3xl md:text-4xl font-nohemi font-normal mb-4"
      >
        {title}
      </Typography>
      <Typography
        variant="body"
        className="text-[#6F6C90] font-nohemi mb-8 max-w-md mx-auto"
      >
        {description}
      </Typography>
      {buttonText && (
        <Button
          className="bg-black text-white rounded-full px-12 py-4 text-lg font-nohemi min-w-[280px]"
          onClick={onBack}
        >
          {buttonText || "Back to Portfolio"}
        </Button>
      )}
    </div>
  </Modal>
);

export default LoadingModal;
