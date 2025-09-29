"use client";
import { useState, useEffect } from "react";
import HeroSectionServer, { images } from "./HeroSectionServer";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // اتوپلی هر 5 ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Preload تصویر بعدی
  useEffect(() => {
    const nextIndex = (current + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex];
  }, [current]);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* رندر سمت سرور */}
      <HeroSectionServer current={current} />

      {/* دکمه‌ها */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        &#8592;
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        &#8594;
      </button>
    </div>
  );
}
