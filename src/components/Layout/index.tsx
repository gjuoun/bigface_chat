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
        <div
          className="columns is-marginless"
          css={css`
            height: 100%;
          `}
        >
          <div
            className="column is-4 is-paddingless"
            css={css`
              border: 1px solid grey;
              height: 100%;
              display: flex;
              flex-direction: column;
              text-align: center;
              overflow-y: scroll;

              & > article.media {
                border-bottom: 1px solid grey;
                padding-top: 0;
                margin:0;
              }

              &:last-child > article.media {
                border: none;
              }
            `}
          >
            <article
              className="media"
              css={css`
                max-width: 30rem;
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
                  width: 100%;
                  padding: 0 5px;
                `}
              >
                <p className="is-size-4 "> Guo Jun</p>
                <div
                  className="has-text-grey"
                  css={css`
                    max-width: 15rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  `}
                >
                  This is messageasldfasdfasfasdfsdfasdfsdfasdf
                </div>
              </div>
            </article>
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
                flex-direction: column;
                align-items: flex-start;
                overflow-y: scroll;

                & > div.box {
                  margin-bottom: 1rem;
                  padding: 1rem;
                }
              `}
            >
              <div className="box">12345</div>
              <div className="box">12345</div>
              <div className="box">12345</div>
              <div className="box">12345</div>
              <div className="box">12345</div>
              <div className="box">12345</div>
              <div className="box">12345</div>
              <div className="box">12345</div>
              <div
                className="box has-background-primary has-text-white"
                css={css`
                  align-self: flex-end;
                `}
              >
                my message
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
