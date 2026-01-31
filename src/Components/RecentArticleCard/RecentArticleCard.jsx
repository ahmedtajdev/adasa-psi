import React from "react";
import { Link } from "react-router-dom";

export default function RecentArticleCard({ post }) {
  const { title, excerpt, category, readTime, date, image, author, slug } = post;

  return (
    <div className="col-md-6 col-lg-4">
      <Link to={`/blog/${slug}`}>
        <div className="RecentArticleCard rounded-5 border-gray overflow-hidden h-100">
          <div className="position-relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="article-img object-fit-cover"
            />
            <div className="category-label rounded-pill px-2 py-1 fs-sm fw-medium bg-dark text-white position-absolute">
              {category}
            </div>
          </div>
          <div className="bg-darkgray p-4 h-100">
            <div className="text-secondary fs-sm mb-3">
              <i className="fa-regular fa-clock ms-2"></i>
              <span>{readTime}</span>
              <span className="px-2 fs-3">&#8226;</span>
              <span> {date}</span>
            </div>
            <h3 className="text-white fs-5 fw-bold">{title}</h3>
            <p className="text-secondary fs-sm">{excerpt}</p>
            <hr className="text-secondary my-4" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <div className="avatar-item position-relative w-40 h-40 rounded-circle bg-secondary">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-100 h-100 rounded-circle object-fit-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white fs-xs mb-0">{author.name}</h4>
                  <span className="text-secondary mb-0 fs-xs">
                    {author.role}
                  </span>
                </div>
              </div>
              <div className="arrow w-36 h-36 bg-orange-dark d-flex justify-content-center align-items-center rounded-circle border-gray">
                <i className="fa-solid fa-angle-left text-dark-orange"></i>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
