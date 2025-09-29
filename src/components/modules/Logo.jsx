import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 relative">
        <Image
          src="/brand-01.svg"   // مسیر لوگو در فولدر public
          alt="MyShop Logo"
          fill
          className="object-contain"
        />
      </div>
      <span className="text-purple-700 font-bold text-xl">برفا استور</span>
    </Link>
  );
}
