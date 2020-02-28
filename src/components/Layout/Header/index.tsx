import React from "react";
import { connect } from "react-redux";
import { State, User } from "../../../types";
import { login, logout } from "../../../actions";
import Button from "./../../Bulma/Button";

interface Props {
  user: User;
  login: Function;
  logout: Function;
}

const Header: React.FC<Props> = ({ user, login, logout }) => {
  const renderAboutButton = () => {
    if (!user) {
      return (
        <a href="/#" className="navbar-item">
          About Bigface
        </a>
      );
    }
    return (
      <a href="/#" className="navbar-item">
        Welcome, {user.name} !
      </a>
    );
  };

  const renderLoginButton = () => {
    if (!user) {
      return (
        <span className="navbar-item">
          <a
            href="/#"
            className="button is-info is-inverted"
            onClick={() => {
              login();
            }}
          >
            <span className="icon">
              <i className="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
          </a>
        </span>
      );
    }

    return (
      <span className="navbar-item">
        <a
          href="/#"
          className="button is-info is-inverted"
          onClick={() => {
            logout();
          }}
        >
          <span className="icon">
            <i className="fa fa-sign-out"></i>
          </span>
          <span>Logout</span>
        </a>
      </span>
    );
  };

  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="/#" className="navbar-item">
              {/* <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              /> */}
              <span className="is-size-4" >Bigface Chat</span>
            </a>
            <span
              className="navbar-burger burger"
              data-target="navbarMenuHeroB"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" className="navbar-menu">

            <div className="navbar-end">
              {renderAboutButton()}
              {renderLoginButton()}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { login, logout })(Header);
