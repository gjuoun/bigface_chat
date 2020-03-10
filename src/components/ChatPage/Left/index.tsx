/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ConversationList from "./ConversationList";
import SearchBar from "./SearchBar";

const Left: React.FC = () => {
  return (
    <div
      className="column is-3 is-paddingless"
      css={[
        css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `
      ]}
    >
      <SearchBar></SearchBar>
      <ConversationList></ConversationList>
    </div>
  );
};

export default Left;
