"use client";
import { useState } from "react";

export default function ColorSelector({ colors, selectedColors = null, onChange }) {
  const [selected, setSelected] = useState(selectedColors);

  const toggleColor = (color) => {
    const newSelected = color;
    setSelected(newSelected);
    if (onChange) onChange(newSelected);
  };

  return (
    <div className="flex flex-row-reverse gap-3 flex-wrap mt-4 border-b border-gray-300 md:border-hidden pb-3">
      {colors.map((color, idx) => (
        <button
          key={idx}
          onClick={() => toggleColor(color)}
          className={`
            w-20 h-10 flex items-center justify-center rounded-lg border text-sm font-medium cursor-pointer transition
            ${
              selected === color
                ? "border-purple-600 bg-purple-100 text-purple-700 shadow-md scale-105"
                : "border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
            }
          `}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
