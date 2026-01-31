import React from "react";
import { Link } from "react-router-dom";
import SelectedArticleCard from "../SelectedArticleCard/SelectedArticleCard";
import data from "./../../data.json";

export default function SelectedArticles() {
  const postList = data.posts;

  return (
    <section className="selectedArticles bg-gradient-dark-to-orange p-sec">
      <div className="container">
        <div className="d-inline-block px-4 py-2 mb-3 text-white fs-sm fw-medium bg-orange-dark rounded-pill border-orange">
          مميز
        </div>
        <h2 className="text-white fw-bold display-3">مقالات مختارة</h2>
        <div className="row py-3 mb-5">
          <div className="col-md-6">
            <p className="text-secondary fs-5">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Link
              to={"blog"}
              className="discover-articles-btn d-inline-block text-white fw-medium bg-orange px-3 py-2 rounded-2 me-0 border-0"
            >
              عرض الكل <i className="fa-solid fa-angle-left me-1"></i>
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column gap-4 align-items-center">
          {postList.map((post, index) => {
            return (
              index < 3 && <SelectedArticleCard post={post} key={post.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
