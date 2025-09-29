import React from "react";
import Modal from "./Modal";

const CategoriesModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="دسته‌بندی‌ها" height="1/2">
      <ul className="space-y-2">
        <li className="p-2 border rounded">دفتر</li>
        <li className="p-2 border rounded">خودکار</li>
        <li className="p-2 border rounded">ماژیک</li>
        <li className="p-2 border rounded">لوازم هنری</li>
      </ul>
    </Modal>
  );
};

export default CategoriesModal;
