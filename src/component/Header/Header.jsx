import React, { useState, useRef, useEffect } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import "./Header.css";

const Header = () => {
  const [shadow, setShadow] = useState("");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 0) {
      setShadow("sm:shadow-[rgba(0,0,0,0.2)_0px_3px_8px] ");
    } else {
      setShadow("");
    }
  });

  const navRef = useRef();
  const inputToggleRef = useRef();

  useEffect(() => {
    const listNav = navRef.current.querySelectorAll(".nav-item");
    listNav.forEach((nav) => {
      const listNavItem = nav.querySelectorAll("li");
      listNavItem.forEach((navItem) => {
        navItem.onclick = () => {
          const input = inputToggleRef.current.checked = false;
        };
      });
    });
  }, []);

  return (
    <section id="header">
      <div
        className={
          shadow +
          "grid-wrapper text-[3rem] relative sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-50 sm:bg-white sm:h-[5rem] sm:flex sm:flex-row-reverse sm:justify-between sm:items-center sm:py-[1rem]"
        }
      >
        <label
          htmlFor="toggle-nav-mobile"
          className="sm:flex hidden h-full items-center text-[#171717] text-[2.8rem]"
        >
          <VscMenu />
        </label>
        <input
          ref={inputToggleRef}
          id="toggle-nav-mobile"
          type="checkbox"
          hidden
        />
        <ul
          ref={navRef}
          className="navbar sm:transition sm:duration-[0.25s] sm:pt-[3.6rem] flex sm:flex-col justify-between sm:justify-start items-center py-[5.5rem] sm:py-0 sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:bg-white sm:z-[100] "
        >
          <label
            htmlFor="toggle-nav-mobile"
            className="sm:block hidden text-[2.2rem] text-[#171717] absolute top-[1rem] right-[1.7rem] p-[0.3rem]"
          >
            <VscChromeClose />
          </label>
          <li>
            <ul className="nav-item">
              <li>
                <a
                  href="https://drive.google.com/file/d/1dQGljI0Sg_120NywOSkKjj0w8CPKtB91/view?usp=sharing"
                  target="_blank"
                >
                  Hồ sơ
                </a>
              </li>
              <li>
                <a href="#my-skill">Kỹ năng</a>
              </li>
              <li>
                <a href="#my-products">Dự án</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="nav-item">
              <li>
                <a
                  href="https://www.facebook.com/lehonglinh781/"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://zalo.me/0372988644" target="_blank">
                  Zalo
                </a>
              </li>
              <li>
                <a href="https://github.com/lelinh014756" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h1 className="text-primary text-center absolute sm:static top-[50%] translate-y-[-50%] sm:translate-y-[unset] left-[50%] translate-x-[-50%] sm:translate-x-[unset] text-[3.4rem] md:text-[2.5rem] sm:text-[2rem] font-[Roboto,serif] uppercase font-[500] tracking-widest md:tracking-[0.05em] first-letter">
          HongLinh Developer
        </h1>
      </div>
    </section>
  );
};

export default Header;
