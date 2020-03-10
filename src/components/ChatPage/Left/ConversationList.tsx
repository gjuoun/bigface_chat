/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { scrollBarStyle } from "..";

const ConversationList: React.FC = () => {
  return (
    <div
      className="conversation-container"
      css={[
        scrollBarStyle,
        css`
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: center;
          overflow-y: scroll;
          border-left: 1px solid lightgrey;
          border-bottom: 1px solid lightgrey;
          & > article.media {
            padding-top: 0;
            margin: 0;
          }
        `
      ]}>
        <Conversation></Conversation>
        <Conversation></Conversation>

      </div>
  );
};

const Conversation: React.FC = props => {
  return (
    <article
      className="media"
      css={css`
        width: 100%;
        height: 64px;
      `}
    >
      <figure className="media-left is-marginless">
        <p className="image is-64x64">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="none"
          />
        </p>
      </figure>
      <div
        className="media-content"
        css={css`
          height: 100%;
          padding: 0 10px;
          overflow: hidden;
          border-bottom: 1px solid lightgrey;
        `}
      >
        <p className="is-size-4 "> Guo Jun</p>
        <div
          className="has-text-grey"
          css={css`
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          `}
        >
          Random text and messages random text and message
        </div>
      </div>
    </article>
  );
};

export default ConversationList;
