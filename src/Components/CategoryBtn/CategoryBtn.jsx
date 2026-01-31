import React, { useState } from "react";

export default function CategoryBtn({
  categoryName,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <button
      onClick={() => {
        setSelectedCategory(categoryName);
      }}
      className={`text-white fs-sm fw-medium border-gray px-3 py-2 rounded-3 ${selectedCategory === categoryName ? "bg-orange" : "bg-darkgray"}`}
    >
      {categoryName}
    </button>
  );
}
