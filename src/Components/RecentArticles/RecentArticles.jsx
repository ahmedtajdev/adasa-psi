import React from "react";
import { Link } from "react-router-dom";
import data from "./../../data.json";
import RecentArticleCard from "../RecentArticleCard/RecentArticleCard";

export default function RecentArticles() {
	const postList = data.posts;

  return (
    <section className="recentArticles bg-gradient-dark-to-orange p-sec">
      <div className="container">
        <div className="d-inline-block px-4 py-2 mb-3 text-white fs-sm fw-medium bg-orange-dark rounded-pill border-orange">
          الأحدث
        </div>
        <h2 className="text-white fw-bold display-3">أحدث المقالات</h2>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 py-3 mb-5">
          <p className="text-secondary fs-5 mb-0">محتوى جديد طازج من المطبعة</p>
          <Link to={"blog"} className="text-dark-orange">
            عرض جميع المقالات<i className="fa-solid fa-arrow-left me-2"></i>
          </Link>
        </div>
				<div className="row g-4">
					{postList.map((post, index) => {
						return (index >= 3 && index < 6) && <RecentArticleCard post={post} key={post.id} />
					})}
				</div>
      </div>
    </section>
  );
}
