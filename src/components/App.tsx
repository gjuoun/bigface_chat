import React from "react";
import { connect } from "react-redux";
import Layout from "./Layout";
import { User, State } from "../types";
import ChatPage from "./ChatPage";

interface Props {
  user: User;
}

const App: React.FC<Props> = ({ user }) => {
  const renderBody = () => {
    if (!user) {
      return (
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Welcome to Bigface</p>
            <p className="subtitle">Login to Chat</p>
          </div>
        </div>
      );
    }
    return <ChatPage></ChatPage>;
  };

  return <Layout>{renderBody()}</Layout>;
};

const mapStateToProps = (state: State) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
