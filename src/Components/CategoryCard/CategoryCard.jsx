import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  const { name, count, icon } = category;

  return (
    <div className="col-md-6 col-lg-3">
      <Link to={"blog"}>
        <div className="category-card bg-darkgray p-4 border-gray rounded-4 position-relative">
          <div className="icon w-48 h-48 bg-orange-dark d-flex justify-content-center align-items-center border-orange rounded-4 mb-4">
            <i className={`${icon} text-dark-orange`}></i>
          </div>
          <h3 className="text-white fw-bold fs-6">{name}</h3>
          <span className="fs-sm text-secondary fw-medium">{`${count} مقالة`}</span>
					<div className="arrow d-flex justify-content-center align-items-center position-absolute bottom-50 rounded-circle opacity-0">
						<i className="fa-solid fa-angle-left text-white"></i>
					</div>
        </div>
      </Link>
    </div>
  );
}
