import React from "react";

export default function ArticleSecLink({title, secNo}) {
  return (
    <li className="ArticleSecLink p-3 rounded-4">
      <a
        href={`#section-${secNo}`}
        className="text-secondary d-flex gap-2 align-items-center"
      >
        <span className="fs-sm fw-medium w-24 h-24 bg-midgray d-flex justify-content-center align-items-center rounded-3">
          {secNo}
        </span>
        <span className="text-secondary fw-medium fs-sm">{title}</span>
      </a>
    </li>
  );
}
