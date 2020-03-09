/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Header from "./Header/";
import Footer from "./Footer";

const Layout: React.FC = props => {
  return (
    <div>
      <Header></Header>

      <section
        className="container"
        css={css`
          border: 1px solid grey;
          height: 100vh;
          padding-top: 56px;
        `}
      >
        <div className="columns is-marginless" css={css`height: 100%`}>
          <div
            className="column is-4 is-paddingless"
            css={css`
              border: 1px solid grey;
              height: 100%;
              display: flex;
              flex-direction: column;
              text-align: center;
              overflow-y: scroll;
            `}
          >
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
            <h1>asdf</h1>
          </div>
          <div
            className="column is-8 is-paddingless"
            css={css`
              background-color: antiquewhite;
              height: 100%;
            `}
          >
            <div
              className="message-container"
              css={css`
                height: 100%;
                display: flex;
                flex-direction: column-reverse;
                align-items: flex-start;
                overflow-y: scroll;
              `}
            >
              <p>12345</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
