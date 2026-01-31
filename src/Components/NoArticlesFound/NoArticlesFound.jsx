import React from "react";

export default function NoArticlesFound({removeFilters}) {
  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <div className="d-flex justify-content-center align-items-center bg-darkgray w-96 h-96 rounded-circle border-gray">
        <i className="fa-regular fa-face-frown text-secondary fa-3x"></i>
      </div>
      <div className="text-white fw-bold fs-4">لا توجد مقالات</div>
      <p className="text-secondary">
        حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
      </p>
      <button
        onClick={() => {
          removeFilters();
        }}
        className="text-white fs-6 fw-semibold bg-gradient-orange-to-gold px-5 py-3 rounded-pill border-0"
      >
        <i className="fa-solid fa-rotate ms-2"></i>
        إعادة تعيين الفلاتر
      </button>
    </div>
  );
}
