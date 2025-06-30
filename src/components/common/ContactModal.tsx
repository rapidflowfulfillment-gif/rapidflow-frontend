"use client";

import React from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        {/* Modal content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Get in touch
        </h3>
        <p className="text-gray-600 mb-4">
          Send us an email for any questions or to get started now
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-800 mb-2">
            Seems like this form is down. Please email at{" "}
            <a
              href="mailto:hexprep@gmail.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              hexprep@gmail.com
            </a>
          </p>
          <p className="text-gray-600 text-sm">
            We apologize for the inconvenience.
          </p>
        </div>
      </div>
    </div>
  );
}
