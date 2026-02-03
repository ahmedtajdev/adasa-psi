import React, { useState } from "react";
import logo from "./../../assets/images/adasa-logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isHamMenuShown, setIsHamMenuShown] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand bg-navbar py-3 fixed-top d-flex justify-content-between">
        <div className="container">
          <Link className="navbar-brand m-0" to={"/adasa-psi"}>
            <div className="d-flex align-items-center gap-2">
              <div className="w-48 h-48">
                <img src={logo} alt="" className="w-100 h-100" />
              </div>
              <div>
                <span className="text-white fs-5 fw-bold mb-1">عدسة</span>
                <p className="text-orange fs-xs mb-0">
                  عالم التصوير الفوتوغرافي
                </p>
              </div>
            </div>
          </Link>
          <div className="d-none d-md-flex justify-content-center">
            <ul className="navbar-nav d-none d-md-flex border-gray px-1 py-2 rounded-pill">
              <li className="nav-item px-1">
                <NavLink
                  key={"home"}
                  className="nav-link fs-sm fw-medium text-secondary px-4 py-2 rounded-pill"
                  to={"/adasa-psi"} end
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item px-1">
                <NavLink
                  key={"blog"}
                  className="nav-link fs-sm fw-medium text-secondary px-4 py-2 rounded-pill"
                  to={"blog"}
                >
                  المدونة
                </NavLink>
              </li>
              <li className="nav-item px-1">
                <NavLink
                  key={"about"}
                  className="nav-link fs-sm fw-medium text-secondary px-4 py-2 rounded-pill"
                  to={"about"}
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-none d-md-flex align-items-center gap-3">
            <div className="search-icon w-46 h-46 d-flex justify-content-center align-items-center rounded-3">
              <i className="fa-magnifying-glass fa-solid text-secondary "></i>
            </div>
            <Link
              className="start-reading-btn navbar-brand text-white fs-sm fw-medium bg-orange px-32 py-3 rounded-pill me-0"
              to={"blog"}
            >
              ابدأ القراءة
            </Link>
          </div>

          <button
            onClick={() => {
              setIsHamMenuShown(true);
            }}
            className={`w-46 h-46 bg-transparent border-0 ${isHamMenuShown ? "d-none" : "d-flex"}  justify-content-center align-items-center rounded-3 d-md-none`}
          >
            <i className="fa-bars fa-solid text-secondary fa-lg"></i>
          </button>

          <button
            onClick={() => {
              setIsHamMenuShown(false);
            }}
            className={`w-46 h-46 bg-transparent border-0 ${isHamMenuShown ? "d-flex" : "d-none"} justify-content-center align-items-center rounded-3 d-md-none`}
          >
            <i className="fa-x fa-solid text-secondary fa-lg"></i>
          </button>

          <ul
            className={`navbar-nav ham-nav bg-darkgray ${isHamMenuShown ? "d-flex" : "d-none"} d-md-none flex-column gap-3 border-gray p-3 rounded-3 w-100`}
          >
            <li className="nav-item px-1">
              <NavLink
                onClick={() => {
                  setIsHamMenuShown(false);
                }}
                className="nav-link fs-sm fw-medium text-secondary px-4 py-3 rounded-4"
                to={"/"} end
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item px-1">
              <NavLink
                onClick={() => {
                  setIsHamMenuShown(false);
                }}
                className="nav-link fs-sm fw-medium text-secondary px-4 py-3 rounded-4"
                to={"blog"}
              >
                المدونة
              </NavLink>
            </li>
            <li className="nav-item px-1">
              <NavLink
                onClick={() => {
                  setIsHamMenuShown(false);
                }}
                className="nav-link fs-sm fw-medium text-secondary px-4 py-3 rounded-4 mb-3"
                to={"about"}
              >
                من نحن
              </NavLink>
            </li>
            <li className="nav-item px-1">
              <Link
                onClick={() => {
                  setIsHamMenuShown(false);
                }}
                className="start-reading-btn text-white fs-6 fw-medium bg-orange py-3 rounded-pill d-flex w-100 justify-content-center"
                to={"blog"}
              >
                ابدأ القراءة
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
