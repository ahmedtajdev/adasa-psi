import React, { useState } from "react";
import data from "./../../data.json";
import RecentArticleCard from "../RecentArticleCard/RecentArticleCard";
import SelectedArticleCard from "../SelectedArticleCard/SelectedArticleCard";
import CategoryBtn from "../CategoryBtn/CategoryBtn";
import NoArticlesFound from "../NoArticlesFound/NoArticlesFound";

export default function BlogBody() {
  const postList = data.posts;
  const categoryList = structuredClone(data.categories);
  categoryList.unshift({ name: "جميع المقالات", count: postList.length });

  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");

  const [isGrid, setIsGrid] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = postList.filter((post) => {
    return isMatchPost(post) && post;
  });

  function removeFilters() {
    setSelectedCategory("جميع المقالات");
    setSearchTerm("");
  }

  function isMatchPost(post) {
    return (
      (post.category === selectedCategory ||
        selectedCategory === "جميع المقالات") &&
      (post.tags.join(",").includes(searchTerm) ||
        post.category.includes(searchTerm) ||
        post.content.includes(searchTerm) ||
        post.excerpt.includes(searchTerm) ||
        post.title.includes(searchTerm) ||
        post.slug.includes(searchTerm))
    );
  }

  return (
    <section className="bg-black p-sec">
      <div className="container">
        <div className="row mb-3 g-3">
          <div className="col-md-4">
            <input
              value={searchTerm}
              onInput={(e) => {
                const value = e.target.value;
                setSearchTerm(value);
              }}
              type="search"
              className="form-control border-gray bg-darkgray text-white py-3 rounded-4 w-100"
              id="search-input"
              placeholder="ابحث في المقالات..."
            />
          </div>
          <div className="col-md-8 d-flex flex-wrap justify-content-center align-items-center gap-3">
            {categoryList.map((category) => {
              return (
                <CategoryBtn
                  categoryName={category.name}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  key={category.name}
                />
              );
            })}
          </div>
        </div>
        <hr className="text-secondary" />

        <div className="d-flex justify-content-between flex-wrap row-gap-3 column-gap-1 align-items-center mb-5 fw-medium">
          <div className="text-secondary">
            عرض <span className="text-white">{filteredPosts.length}</span>{" "}
            مقالات{" "}
            {selectedCategory !== "جميع المقالات" && (
              <span>
                <span>في </span>
                <span className="text-dark-orange">{selectedCategory}</span>
              </span>
            )}
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="bg-darkgray border-gray p-1 rounded-3">
              <button
                onClick={() => {
                  setIsGrid(true);
                }}
                className={`layout-btn btn border-0 ${isGrid && "active"}`}
              >
                <i className="fa-solid fa-border-all text-white"></i>
              </button>
              <button
                onClick={() => {
                  setIsGrid(false);
                }}
                className={`layout-btn btn border-0 ${!isGrid && "active"}`}
              >
                <i className="fa-solid fa-bars text-white"></i>
              </button>
            </div>

            {(selectedCategory !== "جميع المقالات" || searchTerm !== "") && (
              <button
                onClick={() => {
                  removeFilters();
                }}
                className="border-0 text-secondary bg-transparent fs-xs px-0"
              >
                <i className="fa-solid fa-xmark mx-1"></i>
                مسح الفلاتر
              </button>
            )}
          </div>
        </div>
        <div className="row g-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              return isGrid ? (
                <RecentArticleCard post={post} key={post.id} />
              ) : (
                <SelectedArticleCard post={post} key={post.id} />
              );
            })
          ) : (
            <NoArticlesFound removeFilters={removeFilters} />
          )}
        </div>
      </div>
    </section>
  );
}
