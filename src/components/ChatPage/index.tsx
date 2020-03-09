/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Conversation from "./Conversation";

const scrollBarStyle = css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eee;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const messageStyle = css`
  display: block;
  border-bottom: 1px solid grey;
  padding: 10px;
`;

const ChatPage: React.FC = () => {
  return (
    <div className="container " css={css`margin: auto`}>
      <div className="columns box is-marginless is-paddingless" >
        <div className="column is-4 ">
          <h2>Left</h2>
          {/* <p css={messageStyle}>haha</p> */}
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>s<p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
          <p>Haha</p>
        </div>
        <div className="column">
          <h2>right</h2>
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
