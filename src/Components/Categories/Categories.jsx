import React from "react";
import data from "./../../data.json";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function Categories() {
  const categoryList = data.categories;

  return (
    <section className="bg-black p-sec">
      <div className="container">
        <div className="text-center">
          <div className="d-inline-block px-4 py-2 mb-3 text-white fs-sm fw-medium bg-orange-dark rounded-pill border-orange">
            التصنيفات
          </div>
          <h2 className="text-white fw-bold display-3">استكشف حسب الموضوع</h2>
          <p className="text-secondary fs-5 mb-5">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>
        <div className="row g-4">
          {categoryList.map((category) => {
            return <CategoryCard category={category} key={category.name} />;
          })}
        </div>
      </div>
    </section>
  );
}
