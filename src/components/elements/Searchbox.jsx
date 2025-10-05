"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setResults(data);
    }, 400); // debounce کمی تأخیر برای جلوگیری از درخواست زیاد

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="... جستجو"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white rounded-md w-full md:w-[25vw] text-right p-2 outline-none border"
      />

      {/* پیشنهادها */}
      {results.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded-md mt-1 w-full shadow-md text-right">
          {results.map((product) => (
            <li key={product.id} className="border-b border-gray-100">
              <Link
                href={`/products/${product.slug}`}
                className="block p-2 hover:bg-gray-100"
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
