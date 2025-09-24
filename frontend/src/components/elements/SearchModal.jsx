"use client";
import React, { useState, useEffect, useRef } from "react";

const SearchModal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => setAnimate(true), 10); // شروع انیمیشن باز شدن
    } else {
      setAnimate(false);
      const timeout = setTimeout(() => setShow(false), 300); // بعد از انیمیشن
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* بک‌گراند شفاف */}
      <div
        className={`absolute inset-0 bg-purple-900 transition-opacity duration-300 ${
          animate ? "opacity-70" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* مدال full screen */}
      <div
        className={`fixed inset-0 bg-white p-4 transform transition-transform duration-300 ease-out z-10 ${
          animate ? "translate-y-0" : "translate-y-full"
        } flex flex-col`}
      >
        <button
          onClick={onClose}
          className="mb-4 text-purple-600 font-bold"
        >
          ← بازگشت
        </button>

        <input
          type="text"
          placeholder="...جستجوی محصول"
          className="w-full border rounded-lg p-2 text-right"
          autoFocus
        />
      </div>
    </div>
  );
};

export default SearchModal;
