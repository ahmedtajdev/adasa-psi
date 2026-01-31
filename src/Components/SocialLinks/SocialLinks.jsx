import React from "react";

export default function SocialLinks() {
  return (
    <ul className="list-unstyled p-0 d-flex flex-wrap align-items-center gap-2">
      <li>
        <a
          href="https://x.com"
          target="_blank"
          className="social-media-link d-flex justify-content-center align-items-center w-40 h-40 rounded-3 border-gray bg-darkgray text-secondary"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com"
          target="_blank"
          className="social-media-link d-flex justify-content-center align-items-center w-40 h-40 rounded-3 border-gray bg-darkgray text-secondary"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="social-media-link d-flex justify-content-center align-items-center w-40 h-40 rounded-3 border-gray bg-darkgray text-secondary"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          href="https://youtube.com"
          target="_blank"
          className="social-media-link d-flex justify-content-center align-items-center w-40 h-40 rounded-3 border-gray bg-darkgray text-secondary"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </li>
    </ul>
  );
}
