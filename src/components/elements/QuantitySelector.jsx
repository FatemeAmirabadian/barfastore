"use client";
import React from "react";
import { formatPriceToFarsi } from "../../../lib/helpers";

export default function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="bg-gray-100 p-1 border rounded-md flex justify-center items-center gap-2  w-15 md:w-20">
      <button
        onClick={onDecrease}
      >
        -
      </button>
      <span>{formatPriceToFarsi(quantity)}</span>
      <button
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
}
