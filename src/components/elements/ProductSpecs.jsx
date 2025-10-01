"use client";

export default function ProductSpecs({ specs }) {
  if (!specs || Object.keys(specs).length === 0) {
    return <p className="text-gray-500">هیچ ویژگی برای این محصول موجود نیست.</p>;
  }

  return (
    <div className="mt-4 rounded-lg overflow-hidden">
      <table className="w-full">
        <tbody>
          {Object.entries(specs).map(([key, value], idx) => (
            <tr
              key={idx}
              className={`${idx % 2 === 0 ?   "bg-gray-100" :"bg-white"}`}
            >
              <td className="p-2 text-gray-700 text-right">{value}</td>
              <td className="p-2 font-medium text-right">{key}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
