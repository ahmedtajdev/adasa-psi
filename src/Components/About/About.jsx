import React, { useEffect } from "react";

export default function About() {
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])

  return (
   <section className="p-sec vh-100 bg-black d-flex justify-content-center align-items-center">
			<h1 className="fw-bold display-2 text-white">About</h1>
	 </section>
  );
}
