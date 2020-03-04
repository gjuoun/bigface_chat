/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { User } from "../../types";
import {fetchFriends} from '../../actions'

const wideButton = css({
  width: "10rem"
});

interface Props{
  user: User,
}

const Footer: React.FC<Props> = ({user}) => {


  if(!user){
    return null
  }


  return (
    <div className="hero-foot ">
      <nav className="tabs is-boxed is-centered is-large is-toggle ">
        <div className="container ">
          <ul>
            <li className="is-active" css={wideButton}>
              <a href="/#">
                <span className="icon is-medium">
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                </span>
                <span className="is-hidden-touch">Chat</span>
              </a>
            </li>
            <li css={wideButton}>
              <a href="/#">
                <span className="icon is-medium">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </span>
                <span className="is-hidden-touch">Favourite</span>
              </a>
            </li>
            <li css={wideButton}>
              <a href="/#">
                <span className="icon is-medium">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </span>
                <span className="is-hidden-touch">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state: {user: User}) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Footer);
