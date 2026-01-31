import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecentArticleCard from "../RecentArticleCard/RecentArticleCard";
import data from "./../../data.json";

const postList = data.posts;

export default function SuggestedArticles({ selectedPost }) {
  function isSuggestedPost(post) {
    return (
      post.category === selectedPost.category && post.id !== selectedPost.id
    );
  }

  const allSuggestedPosts = postList.filter((post) => {
    return isSuggestedPost(post) && post;
  });

  const max = allSuggestedPosts.length - 3;
  const randomIndex = Math.floor(Math.random() * (max + 1));
  const shownPosts = allSuggestedPosts.slice(randomIndex, randomIndex + 3);

  return (
    <section className="bg-black p-sec">
      <div className="container">
        <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-3">
            <span className="w-48 h-48 bg-orange-dark text-dark-orange border-orange rounded-4 d-flex justify-content-center align-items-center">
              <i className="fa-regular fa-images"></i>
            </span>
            <div>
              <h2 className="fs-4 fw-bold text-white mb-1">مقالات قد تعجبك</h2>
              <p className="text-secondary fw-medium fs-sm mb-0">
                استكشف المزيد من المحتوى المميز
              </p>
            </div>
          </div>
          <Link to={"/adasa-psi/blog"} className="text-dark-orange">
            عرض الكل <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>
        <div className="row g-4">
          {shownPosts.map((post) => {
            return <RecentArticleCard post={post} key={post.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
