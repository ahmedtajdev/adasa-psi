import React, { useState } from "react";
import BlogDetailSec from "../BlogDetailSec/BlogDetailSec";
import PostTag from "../PostTag/PostTag";
import SocialLinks from "./../SocialLinks/SocialLinks";
import ArticleSecLink from "../ArticleSecLink/ArticleSecLink";
import HeaderCard from "../HeaderCard/HeaderCard";
import { Link } from "react-router-dom";

export default function BlogDetailsBody({ selectedPost }) {
  const {
    category,
    image,
    title,
    date,
    readTime,
    author,
    excerpt,
    content,
    tags,
  } = selectedPost;
  const blogSecList = content.split("\n\n");
  const blogSections = [];

  for (let i = 1; i < blogSecList.length; i += 2) {
    blogSections.push({
      secTitle: blogSecList[i].replace("##", ""),
      secContent: blogSecList[i + 1],
    });
  }

  return (
    <>
      <section className="BlogDetailsBody bg-black p-sec position-relative">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div>
                <div className="bg-orange-dark text-light p-4 border-orange rounded-4 fs-5 mb-5">
                  "{excerpt}"
                </div>
                <p className="text-lightgray fs-md mb-5">
                  {content.split("\n\n##")[0]}
                </p>
                <div className="d-flex flex-column gap-4">
                  {blogSections.map((sec, index) => {
                    return (
                      <BlogDetailSec
                        secTitle={sec.secTitle}
                        secContent={sec.secContent}
                        index={index}
                        key={index}
                      />
                    );
                  })}
                </div>
                <div className="bg-darkgray p-4 rounded-4 border-gray mb-4">
                  <div className="d-flex gap-3 align-items-center mb-3">
                    <div className="w-40 h-40 bg-orange-dark border-orange rounded-3 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-tags text-orange"></i>
                    </div>
                    <h3 className="text-white fs-6 fw-bold mb-0">الوسوم</h3>
                  </div>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    {tags.map((tag) => {
                      return <PostTag tag={tag} key={tag} />;
                    })}
                  </div>
                </div>
                <div className="bg-darkgray p-4 rounded-4 border-gray d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                  <div className="d-flex flex-wrap column-gap-3 row-gap-2 align-items-center">
                    <div className="w-40 h-40 bg-orange-dark border-orange rounded-3 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-share-nodes text-orange"></i>
                    </div>
                    <h3 className="text-white fs-6 fw-bold mb-0">
                      شارك المقال
                    </h3>
                  </div>
                  <SocialLinks />
                </div>
                <div className="bg-darkgray p-4 rounded-4 border-gray d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <div className="w-96 h-96 bg-orange-dark p-1 rounded-4 d-flex justify-content-center align-items-center">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="rounded-4"
                      />
                    </div>
                    <div>
                      <span className="text-dark-orange fs-sm">
                        كاتب المقال
                      </span>
                      <h4 className="text-white fs-5 fw-bold mb-0">
                        {author.name}
                      </h4>
                      <span className="text-secondary fs-sm fw-medium d-block pb-3 pb-md-0">
                        {author.role}
                      </span>
                      <span className="text-lightgray fs-sm fw-medium">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                        الفوتوغرافي.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="side-nav col-lg-4 align-self-start order-first order-lg-last">
              <div className="bg-darkgray p-4 rounded-4 border-gray mb-4">
                <div className="d-flex gap-3 align-items-center mb-4">
                  <div className="w-40 h-40 bg-orange-dark border-orange rounded-3 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-list text-orange"></i>
                  </div>
                  <h3 className="text-white fs-6 fw-bold mb-0">
                    محتويات المقال
                  </h3>
                </div>
                <ul className="d-flex flex-column gap-2 px-3">
                  {blogSections.map((sec, index) => {
                    return (
                      <ArticleSecLink
                        title={sec.secTitle}
                        secNo={index + 1}
                        key={index}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="bg-darkgray py-3 px-2 px-xl-5 rounded-4 border-gray d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div className="w-50 px-2">
                  <div className="bg-black d-flex flex-column align-items-center justify-content-center rounded-4 py-4">
                    <span>
                      <i className="fa-regular fa-clock text-dark-orange"></i>
                    </span>
                    <span className="text-white">{readTime}</span>
                    <span className="text-secondary fs-sm">وقت القراءة</span>
                  </div>
                </div>
                <div className="w-50 px-2">
                  <div className="bg-black d-flex flex-column align-items-center justify-content-center rounded-4 py-4">
                    <span>
                      <i className="fa-regular fa-clock text-dark-orange"></i>
                    </span>
                    <span className="text-white">{date}</span>
                    <span className="text-secondary fs-sm">تاريخ النشر</span>
                  </div>
                </div>
              </div>
              <div className="bg-orange-dark border-orange py-3 px-5 d-flex flex-column align-items-center gap-3 rounded-4">
                <span className="w-48 h-48 bg-orange d-flex justify-content-center align-items-center rounded-4">
                  <i className="fa-solid fa-envelope text-white"></i>
                </span>
                <span className="fs-6 fw-medium text-white">
                  لا تفوّت جديدنا
                </span>
                <span className="text-lightgray fs-sm fw-medium">
                  اشترك للحصول على أحدث المقالات
                </span>
                <Link
                  to={"/blog"}
                  className="bg-gradient-orange-to-gold text-white fs-sm fw-medium w-100 text-center py-3 rounded-4"
                >
                  تصفح المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
