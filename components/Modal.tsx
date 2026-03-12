"use client";
import React from "react";

type ModalProps = {
  open: boolean;
  url: string;
  onClose: () => void;
  title?: string;
}

const Modal = ({ open, url, onClose, title }: ModalProps) => {
  if (!open) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleOverlayClick}>
      <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-lg overflow-hidden">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 bg-white rounded-full p-2 shadow">
          ×
        </button>
        {title && <div className="p-4 border-b"><h3 className="bold-18">{title}</h3></div>}
        <iframe src={url} className="w-full h-full" frameBorder={0} allowFullScreen />
      </div>
    </div>
  );
};

export default Modal;
