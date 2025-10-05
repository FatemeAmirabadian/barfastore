import Image from "next/image";

const images = [
  "/20250507_125641.jpg",
  "/brand-03.svg",
  "/notebook-category.webp",
  "/20250428_184531.jpg",
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
