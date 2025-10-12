import { useState } from "react";

export function ColorManager({ value = [], onChange, name = "colors" }) {
  const [colorInput, setColorInput] = useState("");

  const addColor = () => {
    if (colorInput.trim() && !value.includes(colorInput.trim())) {
      const newColors = [...value, colorInput.trim()];
      if (onChange) {
        // شبیه‌سازی event برای handleChange
        onChange({
          target: {
            name: name,
            value: newColors,
          },
        });
      }
      setColorInput("");
    }
  };

  const removeColor = (colorToRemove) => {
    const newColors = value.filter((color) => color !== colorToRemove);
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: newColors,
        },
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addColor();
    }
  };

  return (
    <div className="flex flex-col">
      <label className="flex flex-col">
        <span className="text-sm">رنگ‌ها</span>
        <div className="flex gap-2 mt-1">
          <input
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="نام رنگ را وارد کنید"
            className="flex-1 p-2 border rounded"
          />
          <button
            type="button"
            onClick={addColor}
            className="px-4 bg-blue-500 text-white rounded"
          >
            افزودن
          </button>
        </div>
      </label>

      {/* نمایش رنگ‌های اضافه شده */}
      <div className="flex flex-wrap gap-2 mt-3">
        {value.map((color, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
          >
            <span>{color}</span>
            <button
              type="button"
              onClick={() => removeColor(color)}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
