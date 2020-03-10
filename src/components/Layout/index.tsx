import React from "react";
import Header from "./Header/";


const Layout: React.FC = props => {
  return (
    <div>
      <Header></Header>
      {props.children}      
    </div>
  );
};

export default Layout;
