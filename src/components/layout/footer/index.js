import _ from "lodash";
import Link from "next/link";
import React from "react";
import { getIconComponentByName } from "../../../utils/icons-map";
import { Sanitize } from "../../../utils/miscellaneous";

const Footer = ({ footerMenus, footer }) => {
  return (
    <footer className=" bg-teal-500 p-6">
      <div className=" text-white flex flex-wrap -mx-1 overflow-hidden">
        {/* widget one */}
        <div className=" my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          <div
            dangerouslySetInnerHTML={{ __html: Sanitize(footer?.sidebarOne) }}
          />
        </div>

        {/* widget two */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          <div
            dangerouslySetInnerHTML={{ __html: Sanitize(footer?.sidebarTwo) }}
          />
        </div>

        {/* Footer menus */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          {!_.isEmpty(footerMenus) && _.isArray(footerMenus) ? (
            <ul>
              {footerMenus?.map((menu) => (
                <li key={menu?.node?.id}>
                  <Link href={menu?.node?.path}>
                    <a>{menu?.node?.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {/* copyright text */}
      <div className="mb-8 mt-8 w-full flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 text-white">
          {footer?.copyrightText
            ? footer?.copyrightText
            : "@Codeytek Academy 2020"}{" "}
        </div>
        <div className="w-full lg:w-3/4 flex justify-end align-baseline">
          {!_.isEmpty(footer?.socialLinks) && _.isArray(footer?.socialLinks) ? (
            <ul className="flex items-center">
              {footer?.socialLinks?.map((socialLink) => (
                <li key={socialLink?.iconName} className="mx-2">
                  <a href={socialLink?.iconUrl}>
                    {getIconComponentByName(socialLink?.iconName)}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//NOTE:Search for => dangerouslySetInnerHTML={{__html: footer?.sidebarOne}}
