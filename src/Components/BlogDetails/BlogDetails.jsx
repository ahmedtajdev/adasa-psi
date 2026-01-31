import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "./../../data.json";
import BlogDetailHero from "../BlogDetailsHero/BlogDetailHero";
import BlogDetailsBody from "../BlogDetailsBody/BlogDetailsBody";
import SuggestedArticles from "../SuggestedArticles/SuggestedArticles";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function BlogDetails() {
  const postList = data.posts;
  const { slug } = useParams();
  const post = postList.filter((post) => {
    return post.slug === slug;
  });

  const [selectedPost] = post;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  return !selectedPost ? (
    <ErrorPage />
  ) : (
    <>
      <BlogDetailHero selectedPost={selectedPost} />
      <BlogDetailsBody selectedPost={selectedPost} />
      <SuggestedArticles selectedPost={selectedPost} />
    </>
  );
}
