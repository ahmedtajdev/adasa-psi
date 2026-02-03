import React from "react";
import { Link } from "react-router-dom";

export default function BlogDetailHero({ selectedPost }) {
  const { category, image, title, date, readTime, author } = selectedPost;

  return (
    <section className="pt-90">
      <div className="h-500 overflow-hidden position-relative">
        <img src={image} alt={title} className="w-100 h-100 object-fit-cover" />
        <div className="dark-layer p-4">
          <div className="bg-lightgray rounded-pill d-inline-block fs-sm px-3 py-2">
            <Link to={"/"} className="text-light">
              <i className="fa-solid fa-home"></i>
            </Link>
            <span className="px-1 text-light">
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <Link to={"/blog"} className="text-light">
              المدونة
            </Link>
            <span className="px-1 text-light">
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <span className="text-orange fs-sm fw-medium">{category}</span>
          </div>
          <div className="max-width-1050 mx-auto pt-5">
            <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
              <Link
                to={`/blog`}
                className="bg-orange text-white fs-6 fw-medium px-3 py-2 rounded-pill"
              >
                {category}
              </Link>
              <span className="text-light fs-sm">
                <i className="fa-regular fa-calendar ms-2"></i>
                {date}
              </span>
              <span className="text-light fs-sm">
                <i className="fa-regular fa-clock ms-2"></i>
                {readTime}
              </span>
            </div>
            <h1 className="text-white fw-bold display-3 mb-3">{title}</h1>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center bg-midgray p-3 rounded-4 border-gray gap-2">
                <div className="avatar-item position-relative w-56 h-56 rounded-circle bg-orange">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-100 h-100 rounded-circle object-fit-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white fs-sm fw-semibold mb-0">
                    {author.name}
                  </h4>
                  <span className="text-secondary mb-0 fs-sm fw-semibold ">
                    {author.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
