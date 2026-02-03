import React from "react";
import data from "./../../data.json";
import { Link } from "react-router-dom";

export default function SelectedArticleCard({ post }) {
  const { title, excerpt, category, readTime, date, image, author, slug } =
    post;

  return (
    <div className="col-12">
      <Link to={`/adasa-psi/blog/${slug}`}>
        <div className="row g-0 SelectedArticleCard rounded-5 overflow-hidden border-gray p-0">
          <div className=" col-md-6">
            <div className="position-relative overflow-hidden h-100">
              <img
                src={image}
                alt={title}
                className="article-img w-100 h-100"
              />
              <div className="vip d-inline-block px-3 py-1 mb-3 text-white fs-sm fw-medium bg-gradient-orange-to-gold rounded-pill position-absolute">
                <i className="fa-solid fa-star fs-xs ms-1"></i> مميز
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-darkgray p-4 h-100">
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                <div className="category-label d-inline-block px-3 py-1 text-white fs-xs fw-medium bg-orange-dark rounded-pill border-orange">
                  {category}
                </div>
                <div className="text-secondary fs-sm">
                  <i className="fa-regular fa-clock ms-2"></i>
                  {readTime}
                </div>
              </div>
              <h3 className="text-white fw-bold mb-4">{title}</h3>
              <p className="text-secondary">{excerpt}</p>
              <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center pt-lg-5">
                <div className="d-flex align-items-center gap-2">
                  <div className="avatar-item position-relative w-48 h-48 rounded-circle bg-secondary">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-100 h-100 rounded-circle object-fit-cover"
                    />
                    <div className="online bg-orange position-absolute"></div>
                  </div>
                  <div>
                    <h4 className="text-white fs-xs mb-0">{author.name}</h4>
                    <span className="text-secondary mb-0 fs-xs">{date}</span>
                  </div>
                </div>
                <Link to={`/adasa-psi/blog/${slug}`} className="text-dark-orange">
                  اقرأ المقال <i className="fa-solid fa-arrow-left me-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
