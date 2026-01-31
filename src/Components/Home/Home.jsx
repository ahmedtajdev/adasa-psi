import React, { useEffect } from "react";
import Header from "../Header/Header";
import SelectedArticles from "../SelectedArticles/SelectedArticles";
import Categories from "../Categories/Categories";
import RecentArticles from "../RecentArticles/RecentArticles";
import CTA from "../CTA/CTA";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
	
  return (
    <>
      <Header />
      <SelectedArticles />
      <Categories />
      <RecentArticles />
      <CTA />
    </>
  );
}
