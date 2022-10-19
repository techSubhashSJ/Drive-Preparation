import _ from "lodash";
import React from "react";
import Nav from "./nav";

const Header = ({ headerMenus, header }) => {
  if (_.isEmpty(headerMenus)) {
    return null;
  }

  return (
    <header>
      <Nav headerMenus={headerMenus} header={header}/>
    </header>
  );
};

export default Header;
