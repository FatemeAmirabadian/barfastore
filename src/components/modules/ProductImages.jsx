"use client";
import { useGalleryStore } from "../../../store/galleryStore";
import ImageGalleryModal from "../elements/ImageGalleryModal";

export default function ProductImages({ images }) {
  const openModal = useGalleryStore((state) => state.openModal);

  return (
    <div>
      {/* عکس اصلی */}
      <div className="w-full h-[50vh] mb-4 relative">
        <img
          src={images[0]?.url || "https://via.placeholder.com/150"}
          alt="Main image"
          className="h-full w-3/4 object-cover object-center rounded-xl cursor-pointer"
          onClick={() => openModal(images, 0)}
        />
      </div>

      {/* عکس‌های کوچک حداکثر 4 تا */}
      <div className="grid grid-cols-4 gap-2 overflow-hidden">
        {images.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-square rounded-xl cursor-pointer"
            onClick={() => openModal(images, idx + 1)}
          >
            <img
              src={img.url}
              alt={`Image ${idx + 2}`}
              className="h-full w-3/4 object-fill rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* مودال */}
      <ImageGalleryModal />
    </div>
  );
}
