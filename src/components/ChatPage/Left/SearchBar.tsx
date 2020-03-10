/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from 'react'

const SearchBar:React.FC = () => {
  return (
    <div>
      <div className="field has-addons is-marginless">
        <div
          className="control"
          css={css`
            flex: 100%;
          `}
        >
          <input type="text" className="input" placeholder="Search a user" />
        </div>
        <div className="control">
          <a href="/#" className="button is-primary">
            <span className="icon">
              <i className="fa fa-search"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
