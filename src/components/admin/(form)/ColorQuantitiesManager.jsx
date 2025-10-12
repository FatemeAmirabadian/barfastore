import React from 'react';

export function ColorQuantitiesManager({ colors = [], value = {}, onChange, name = "colorQuantities" }) {
  const quantities = React.useMemo(() => {
    try {
      return value || {};
    } catch {
      return {};
    }
  }, [value]);

  const handleQuantityChange = (color, quantity) => {
    const newQuantities = {
      ...quantities,
      [color]: parseInt(quantity) || 0
    };
    
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: newQuantities
        }
      });
    }
  };

  const handleRemoveColor = (colorToRemove) => {
    const newQuantities = { ...quantities };
    delete newQuantities[colorToRemove];
    
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: newQuantities
        }
      });
    }
  };

  return (
    <div className="flex flex-col">
      <label className="flex flex-col">
        <span className="text-sm">تعداد هر رنگ</span>
        
        <div className="mt-3 space-y-3">
          {colors.map((color, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div 
                  className="w-4 h-4 rounded border flex-shrink-0"
                  style={{ 
                    backgroundColor: 
                      color === "صورتی" ? "#ff69b4" :
                      color === "بنفش" ? "#9370db" :
                      color === "آبی" ? "#4169e1" :
                      color === "قرمز" ? "#dc2626" :
                      color === "سبز" ? "#16a34a" :
                      color === "مشکی" ? "#000000" :
                      color === "سفید" ? "#ffffff" : "#d1d5db"
                  }}
                />
                <span className="text-sm font-medium truncate">{color}</span>
              </div>

              <input
                type="number"
                min="0"
                value={quantities[color] || ""}
                onChange={(e) => handleQuantityChange(color, e.target.value)}
                placeholder="0"
                className="w-16 p-2 border rounded text-center"
              />
              
              <span className="text-xs text-gray-500 w-6">عدد</span>
              
              <button
                type="button"
                onClick={() => handleRemoveColor(color)}
                className="text-red-500 hover:text-red-700 p-1 flex-shrink-0"
              >
                ×
              </button>
            </div>
          ))}
          
          {colors.length === 0 && (
            <div className="text-center text-gray-500 py-6 border-2 border-dashed rounded-lg">
              <div>⏳</div>
              <div className="text-sm mt-2">ابتدا رنگ‌ها را اضافه کنید</div>
            </div>
          )}
        </div>
      </label>
      
      {colors.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-sm font-medium text-blue-800">خلاصه موجودی:</div>
          <div className="mt-2 text-sm text-blue-700 space-y-1">
            {Object.entries(quantities)
              .filter(([color, qty]) => colors.includes(color) && qty > 0)
              .map(([color, qty]) => (
                <div key={color} className="flex justify-between">
                  <span>{color}:</span>
                  <span>{qty} عدد</span>
                </div>
              ))
            }
            {Object.entries(quantities).filter(([color, qty]) => colors.includes(color) && qty > 0).length === 0 && (
              <div className="text-orange-600">هنوز تعداد وارد نشده</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}