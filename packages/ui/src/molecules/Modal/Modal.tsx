import React from "react";

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white shadow-lg relative w-[90vw] max-w-[532px]">
        {onClose && (
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
