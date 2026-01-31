import React, { useEffect } from "react";
import BlogHeader from "../BlogHeader/BlogHeader";
import BlogBody from "../BlogBody/BlogBody";

export default function Blog() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
  return (
    <>
      <BlogHeader />
      <BlogBody />
    </>
  );
}
