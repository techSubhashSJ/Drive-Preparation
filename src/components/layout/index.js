import _ from "lodash";
import Head from "next/head";
import React from "react";
import { Sanitize } from "../../utils/miscellaneous";
import Seo from "../seo";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ data, children }) => {
  if (_.isEmpty(data?.page)) {
    return null;
  }

  const { page, header, footer, headerMenus, footerMenus } = data || {};
  
  return (
    <div>
      <Seo seo={page?.seo} uri={page?.uri} />
      <Head>
        <link rel="shortcut icon" href={header?.favicon} />
        {page?.seo?.schemaDetails && (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{
              __html: Sanitize(page?.seo?.schemaDetails),
            }}
          />
        )}
      </Head>
      <Header headerMenus={headerMenus.edges} header={header} />
      <div className="h-almost-screen">{children}</div>
      <Footer footerMenus={footerMenus.edges} footer={footer} />
    </div>
  );
};

export default Layout;
