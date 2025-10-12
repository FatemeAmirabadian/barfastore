import React, { useState, useRef } from 'react';

export function ImagesManager({ value = [], onChange, name = "images" }) {
  const [images, setImages] = useState(Array.isArray(value) ? value : []);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      file: file,
      name: file.name
    }));

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: updatedImages
        }
      });
    }

    e.target.value = '';
  };

  const removeImage = (indexToRemove) => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
    
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: updatedImages
        }
      });
    }
  };

  return (
    <div className="flex flex-col">
      <label className="flex flex-col">
        <span className="text-sm">تصاویر محصول</span>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          multiple
          accept="image/*"
          className="mt-2 p-3 border-2 border-dashed rounded-lg"
        />
      </label>

      <div className="mt-4 space-y-3">
        {images.map((image, index) => (
          <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border">
            <img
              src={image.url}
              alt="پیش‌نمایش"
              className="w-12 h-12 object-cover rounded"
            />
            <div className="flex-1">
              <div className="text-sm truncate">{image.name}</div>
            </div>
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center text-gray-400 py-6">
          ⏳ تصویری انتخاب نشده
        </div>
      )}
    </div>
  );
}