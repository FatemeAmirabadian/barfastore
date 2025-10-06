import Image from "next/image";

const images = [
  "/images/20250312_135123.jpg",
  "/images/20250317_132059.jpg",
  "/images/20250326_131826.jpg",
];

export default function HeroSectionServer({ current }) {
  return (
    <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden rounded-xl shadow-lg relative">
      <Image
        src={images[current]}
        alt={`Slide ${current + 1}`}
        fill
        className="object-cover"
        priority={current === 0} // تصویر اول سمت سرور preload شود
      />
    </div>
  );
}

export { images };
