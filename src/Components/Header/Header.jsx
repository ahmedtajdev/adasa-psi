import React from "react";
import HeaderCard from "../HeaderCard/HeaderCard";
import { Link } from "react-router-dom";

export default function Header() {
  const cards = [
    { id: 1, icon: "fa-solid fa-newspaper", count: "+50", desc: "مقالة" },
    { id: 2, icon: "fa-solid fa-users", count: "+10 الف", desc: "قارئ" },
    { id: 3, icon: "fa-solid fa-folder-open", count: "4", desc: "تصنيفات" },
    { id: 4, icon: "fa-solid fa-pen-nib", count: "6", desc: "كاتب" },
  ];

  return (
    <section className="header text-center p-sec">
      <div className="container">
        <div className="d-inline-block px-3 py-2 mb-5 text-white fs-sm fw-medium bg-orange-dark rounded-pill border-orange">
          مرحباً بك في عدسة
        </div>
        <h1 className="text-white display-1 fw-semibold mb-4">
          اكتشف <span className="text-gold">فن</span> <br /> التصوير الفوتوغرافي
        </h1>

        <p className="text-secondary fs-4 mb-5">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>

        <div className="row g-4 align-items-center justify-content-center flex-grow-0 mb-4">
          <div className="col-md-4">
            <Link
              to={"blog"}
              className="discover-articles-btn d-inline-block text-white fw-medium bg-orange px-4 py-3 rounded-pill me-0 border-0 w-100"
            >
              استكشف المقالات <i className="fa-solid fa-arrow-left me-1"></i>
            </Link>
          </div>

          <div className="col-md-3">
            <Link
              to={"blog"}
              className="more-info-btn d-inline-block text-white fw-medium bg-orange px-4 py-3 rounded-pill me-0 w-100 border border-secondary bg-transparent"
            >
              <i className="fa-solid fa-circle-exclamation ms-1"></i> اعرف
              المزيد
            </Link>
            {/* <Link
            to={"about"}
            className="more-info-btn text-white fw-medium bg-transparent px-4 py-3 rounded-pill me-0 border border-secondary w-100"
          >
           <i className="fa-solid fa-circle-exclamation ms-1"></i> اعرف المزيد
          </Link> */}
          </div>
        </div>

        <div className="row g-3 max-width-700 m-auto">
          {cards.map((card) => {
            return <HeaderCard card={card} key={card.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
