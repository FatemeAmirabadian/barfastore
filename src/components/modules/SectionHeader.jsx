import Link from "next/link";

export default function SectionHeader({ title, linkHref }) {
  return (
    <div className="flex justify-between items-center mb-5 px-1">
      <Link
        href={linkHref}
        className="inline-flex px-2 py-1 sm:px-6 sm:py-2 rounded-3xl text-white bg-purple-500 hover:bg-purple-700 border-2 border-purple-600 shadow-md hover:shadow-xl transition-all duration-200"
      >
        مشاهده همه
      </Link>
      <h2 className="text-xl sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
