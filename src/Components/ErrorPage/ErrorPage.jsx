import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="bg-gradient-dark-to-orange p-sec text-center">
      <div className="container">
        <div className="text-dark-orange display-1 fw-bold mb-4">404</div>
        <div className="d-flex justify-content-center mx-auto align-items-center bg-orange-dark w-96 h-96 rounded-circle border-gray mb-4">
          <i className="fa-regular fa-face-frown text-dark-orange fa-3x"></i>
        </div>
        <h2 className="text-white fw-bold fs-3">عفواً! الصفحة غير موجودة</h2>
        <p className="text-lightgray fs-6 fw-medium mb-5">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-md-4">
            <Link
              to={"/"}
              className="discover-articles-btn d-inline-block text-white fw-medium bg-orange py-3 rounded-pill me-0 border-0 w-100"
            >
             <i className="fa-solid fa-home ms-2"></i>الذهاب للرئيسية
            </Link>
          </div>

          <div className="col-md-4">
            <Link
              to={"/blog"}
              className="more-info-btn d-inline-block text-white fw-medium bg-orange py-3 rounded-pill me-0 w-100 border border-secondary bg-transparent"
            >
              <i className="fa-regular fa-newspaper ms-2"></i> 
              تصفح المقالات
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
