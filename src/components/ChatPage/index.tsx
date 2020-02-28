/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import React from "react";

const scrollBarStyle = css`
  border-right: 1px solid lightgrey;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    background: #eee
  }
  &::-webkit-scrollbar-thumb:hover{ 
    background: #555
  }
`

const ChatPage: React.FC = () => {
  return (
    <div className="hero-body " style={{ alignItems: "stretch" }}>
      <div className="container ">
        <div className="columns box is-marginless is-paddingless" style={{height: "100%"}}>
          <div className="column is-4 " css={scrollBarStyle}>
            
            
          </div>
          <div className="column " style={{alignItems: "stretch"}} >
            {/* <div className="box" style={{height: `100%`}}> */}
                  {/* 23 */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
