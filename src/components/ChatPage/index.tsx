/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Left from './Left/.'
import Right from './Right/.'

export const scrollBarStyle = css`
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

const ChatPage: React.FC = () => {
  return (
    <section
        className="container"
        css={css`
          /* border: 1px solid grey; */
          height: 100vh;
          padding-top: 56px;
        `}
      >
        <div
          className="columns is-marginless"
          css={css`
            height: 100%;
          `}
        >
          <Left></Left>
          <Right></Right>
        </div>
      </section>
  );
};
export default ChatPage;
