import _ from "lodash";
import Link from "next/link";
import React, { useState } from "react";

const Nav = ({ headerMenus, header }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  if (_.isEmpty(headerMenus)) {
    return null;
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src={header?.favicon}
          alt="..."
          height="30px"
          width="30px"
          className="mr-4"
        />
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold text-xl tracking-tight">
            {header?.siteTitle}
          </span>
          <span>{header?.siteTagLine}</span>
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setIsMenuVisible((flag) => !flag)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          isMenuVisible
            ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            : "hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        }
      >
        {headerMenus?.length ? (
          <div className="text-sm lg:flex-grow">
            {headerMenus?.map((menu) => (
              <Link href={menu?.node?.path} key={menu?.node?.id}>
                <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  {menu?.node?.label}
                </a>
              </Link>
            ))}
          </div>
        ) : null}

        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
