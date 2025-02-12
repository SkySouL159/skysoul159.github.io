import React from "react";

const ImageModal = ({ isOpen, src, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="max-w-[90vw] max-h-[90vh]">
        <img
          src={src}
          alt="Enlarged view"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImageModal;
