import React from "react";
import { connect } from "react-redux";
import { State, User } from "../../../types";
import { login, logout } from "../../../actions";

interface Props {
  user: User;
  login: Function;
  logout: Function;
}

const Header: React.FC<Props> = ({ user, login, logout }) => {
  return (
    <nav
      role="navigation"
      className="navbar container is-fixed-top"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="https://www.google.ca" className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          href="www.baidu.com"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {/* navbar Button  */}
      <div className="navbar-menu is-active ">
        <div className="navbar-end">
          {/* dropdown button */}
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="/#" className="navbar-link">
              More
            </a>
            <div className="navbar-dropdown">
              <a href="/#" className="navbar-item">
                About
              </a>
              <a href="/#" className="navbar-item">
                Jobs
              </a>
              <a href="/#" className="navbar-item">
                Contact
              </a>
            </div>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <a href="/#" className="button is-link">
                <span className="icon">
                  <i className="fa fa-sign-in"></i>
                </span>
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: State) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { login, logout })(Header);
