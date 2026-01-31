import React from "react";

export default function BlogHeader() {
  return (
    <section className="bg-gradient-dark-to-orange p-sec text-center mt-90">
      <div className="container">
        <div className="d-inline-block px-3 py-2 mb-3 text-orange fs-sm fw-medium bg-orange-dark rounded-pill border-orange">
          <i className="fa-regular fa-newspaper ms-2"></i>
          مدونتنا
        </div>
        <h1 className="text-white display-3 fw-semibold mb-4">
          استكشف <span className="text-orange">مقالاتنا</span>
        </h1>

        <p className="text-secondary fs-4 mb-5">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
    </section>
  );
}
