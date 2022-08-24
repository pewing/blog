import React from 'react';

import Header from "./Header";

import "./Layout.scss";

const Layout = (props: {
  children?: React.ReactNode
}) => {
    return (
      <div className="layout">
        <Header/>
        <div className="content">
          {props.children}
        </div>
      </div>
    );
  };

export default Layout;