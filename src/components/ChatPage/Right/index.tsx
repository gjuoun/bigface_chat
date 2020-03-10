/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { scrollBarStyle } from "../.";

const Right: React.FC = () => {
  return (
    <div
      className="column is-9 is-paddingless"
      css={css`
        background-color: antiquewhite;
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        className="message-container"
        css={[
          css`
            flex: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            overflow-y: scroll;

            & > div.level {
              margin-bottom: 1rem;
            }

            & div.box {
              margin-bottom: 1rem;
              margin: 0;
              padding: 1rem;
            }
          `,
          scrollBarStyle
        ]}
      >
        <Message>123545</Message>
        <Message>123545</Message>
        <Message>123545</Message>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
        <MessageMine>haha</MessageMine>
      </div>
      <div
        className="chat-container level"
        css={css`
          width: 100%;
          flex: 32px;
          display: flex;
        `}
      >
        <input
          type="text"
          css={css`
          border: 1px solid lightgrey;
            flex: 100%;
            height: 100%;
          `}
        />
        <div className="icon-container">
          <button className="button is-primary">
            <span className="icon">
              <i className="fa fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Message: React.FC = props => {
  return (
    <div className="level">
      <span className="icon" css={css`width: 56px`}>
        <i className="fa fa-address-book fa-3x"></i>
      </span>
      <div className="box">{props.children}</div>
    </div>
  );
};

const MessageMine: React.FC = props => {
  return (
    <div
      className="level"
      css={css`
        align-self: flex-end;
      `}
    >
      <div className="box has-background-primary has-text-white">
        {props.children}
      </div>
      <span className="icon" css={css`width: 56px`}>
        <i className="fa fa-address-book-o fa-3x"></i>
      </span>
    </div>
  );
};

export default Right;
