"use client";
import React from "react";
import Modal from "./Modal";
import Link from "next/link";
import { categories } from "../../../data/categories";

const CategoriesModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} height="1/2">
      <Link href={"/categories"}>
        <p className="text-right max-h-64 p-2 border rounded hover:bg-gray-100 transition cursor-pointer my-2">
          همه دسته بندی ها
        </p>
      </Link>
      <ul className="space-y-2 text-right max-h-64 overflow-y-auto">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/${category.url}`}
              onClick={onClose}
              className="block p-2 border rounded hover:bg-gray-100 transition cursor-pointer"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default CategoriesModal;
