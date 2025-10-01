"use client";

import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="text-2xl transition-colors"
    >
      {liked ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="text-red-500" />
      )}
    </button>
  );
}
