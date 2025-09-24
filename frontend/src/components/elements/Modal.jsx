"use client";
import React, { useState, useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const modalRef = useRef(null);
  const [modalHeight, setModalHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      // بعد از render اندازه مدال رو بگیر
      setTimeout(() => {
        if (modalRef.current) {
          setModalHeight(modalRef.current.offsetHeight);
        }
        setAnimate(true);
      }, 10);
    } else {
      setAnimate(false);
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* بک‌گراند شفاف */}
      <div
        className={`absolute inset-0 bg-purple-300 transition-opacity duration-300 ${
          animate ? "opacity-70" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* مدال داینامیک */}
      <div
        ref={modalRef}
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4 transform transition-transform duration-300 ease-out`}
        style={{
          transform: animate
            ? "translateY(0)"
            : `translateY(${modalHeight}px)`,
        }}
      >
        <button onClick={onClose} className="mb-4 text-purple-600 font-bold">
          ← بازگشت
        </button>

        {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}

        {children}
      </div>
    </div>
  );
};

export default Modal;
