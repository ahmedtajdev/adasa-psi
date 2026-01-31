import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-dark-to-orange p-sec position-relative">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="text-white d-flex align-items-center gap-2">
                <div className="fs-5 bg-orange fw-bold w-46 h-46 rounded-3 d-flex justify-content-center align-items-center">
                  ع
                </div>
                <h3 className="fs-5">عدسة</h3>
              </div>
              <p className="text-secondary py-4 mb-0">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <SocialLinks />
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="overflow-hidden">
                <h3 className="footer-title fs-6 fw-medium text-white position-relative pe-5 mb-4">
                  استكشف
                </h3>
                <ul>
                  <li className="mb-3">
                    <Link
                      to={""}
                      className="footer-link text-secondary position-relative"
                    >
                      <i className="footer-angle fa-solid fa-angle-left"></i>
                      <span className="fs-sm position-relative">الرئيسية</span>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to={"blog"}
                      className="footer-link text-secondary position-relative"
                    >
                      <i className="footer-angle fa-solid fa-angle-left"></i>
                      <span className="fs-sm position-relative">المدونة</span>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to={"about"}
                      className="footer-link text-secondary position-relative"
                    >
                      <i className="footer-angle fa-solid fa-angle-left"></i>
                      <span className="fs-sm position-relative">من نحن</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="overflow-hidden">
                <h3 className="footer-title fs-6 fw-medium text-white position-relative pe-5 mb-4">
                  التصنيفات
                </h3>
                <ul>
                  <li className="mb-3">
                    <Link
                      to={"blog"}
                      className="footer-link text-secondary position-relative"
                    >
                      <i className="footer-angle fa-solid fa-angle-left"></i>
                      <span className="fs-sm position-relative">اضاءة</span>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to={"blog"}
                      className="footer-link text-secondary position-relative"
                    >
                      <i className="footer-angle fa-solid fa-angle-left"></i>
                      <span className="fs-sm position-relative">بورتريه</span>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to={"blog"}
                      className="footer-link text-secondary position-relative"
                    >
                      <i className="footer-angle fa-solid fa-angle-left"></i>
                      <span className="fs-sm position-relative">
                        مناظر طبيعية
                      </span>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to={"blog"}
                      className="footer-link text-secondary position-relative"
                    >
                      <i className="footer-angle fa-solid fa-angle-left"></i>
                      <span className="fs-sm position-relative">تقنيات</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div>
                <h3 className="footer-title fs-6 fw-medium text-white position-relative pe-5 mb-4">
                  ابقى على اطلاع
                </h3>
                <p className="text-secondary">
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control border-gray bg-darkgray py-2 rounded-3"
                      id="email-input"
                      placeholder="أدخل بريدك الالكتروني"
                    />
                  </div>
                  <button
                    type="submit"
                    className="subscribe-btn navbar-brand text-white fs-sm fw-semibold bg-orange w-100 py-3 rounded-pill me-0 border-0"
                  >
                    اشترك
                  </button>
                </form>
              </div>
            </div>
          </div>
					<div className="d-flex flex-wrap gap-3 justify-content-between align-items-center pt-5 text-secondary fs-sm">
						<div>© 2026 عدسة. صنع بكل <i className="fa-solid fa-heart text-dark-orange"></i> جميع الحقوق محفوظة.</div>
						<div className="d-flex flex-wrap gap-3 align-items-center">
							<Link className="text-secondary fs-sm" to={"/"}>سياسة الخصوصية</Link>
							<Link className="text-secondary fs-sm" to={"/"}>شروط الخدمة</Link>
						</div>
					</div>
        </div>
      </footer>
    </>
  );
}
