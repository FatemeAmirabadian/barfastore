"use client";
import Image from "next/image";
import { useGalleryStore } from "../../../store/galleryStore";
import { SlClose } from "react-icons/sl";

export default function ImageGalleryModal() {
  const { images, currentIndex, isOpen, closeModal, nextImage, prevImage } =
    useGalleryStore();

  if (!isOpen || !images.length) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      {/* دکمه بستن */}
      <button
        className="absolute top-5 left-5 text-white text-2xl font-bold bg-black/40 rounded-full  hover:bg-black/80"
        onClick={closeModal}
      ><SlClose/>
      </button>
      <div className="relative max-w-3xl w-full mx-4">
        {/* عکس بزرگ */}
        <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
          <Image
            src={images[currentIndex].url}
            alt={`Image ${currentIndex + 1}`}
            fill
            className="object-contain rounded-xl"
          />
        </div>

        {/* دکمه‌ها */}
        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 text-black text-3xl font-bold px-2 py-1 bg-white/50  hover:bg-white/80 rounded"
          onClick={prevImage}
        >
          ‹
        </button>
        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 text-black text-3xl font-bold px-2 py-1 bg-white/50 hover:bg-white/80 rounded"
          onClick={nextImage}
        >
          ›
        </button>
      </div>
    </div>
  );
}
